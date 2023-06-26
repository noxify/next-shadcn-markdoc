import fs from "fs"
import path from "path"
import React from "react"
import { Metadata } from "next"
import Link from "next/link"
import Markdoc, {
  RenderableTreeNode,
  RenderableTreeNodes,
} from "@markdoc/markdoc"
import { slugifyWithCounter } from "@sindresorhus/slugify"
import { globby } from "globby"
import { ChevronRight } from "lucide-react"
import { z } from "zod"
import { parse } from "zod-matter"

import { components, config } from "@/config/markdoc.config"
import { cn } from "@/lib/utils"
import { ScrollArea } from "@/components/ui/scroll-area"
import { TableOfContents } from "@/components/markdoc/table.of.contents"

const CONTENT_DIR = path.join(process.cwd(), "content")

type Params = {
  slug: string
}

type PageProps = {
  params: Params
}

type Node = {
  name: string
  attributes: { [key: string]: any }
  children?: Node[]
}

function getNodeText(node: Node) {
  let text = ""
  for (let child of node.children ?? []) {
    if (typeof child === "string") {
      text += child
    }
    text += getNodeText(child)
  }
  return text
}

function collectHeadings(nodes: Node[], slugify = slugifyWithCounter()) {
  let sections: any[] = []

  for (let node of nodes) {
    if (node.name === "Heading") {
      let title = getNodeText(node)
      if (title) {
        let id = slugify(title)
        node.attributes.id = id
        if (node.attributes.level > 2) {
          if (!sections[sections.length - 1]) {
            throw new Error(
              `Cannot add 'h${
                node.attributes.level
              }' to table of contents without a preceding 'h${
                node.attributes.level - 1
              }'`
            )
          }
          sections[sections.length - 1].children.push({
            ...node.attributes,
            title,
          })
        } else {
          sections.push({ ...node.attributes, title, children: [] })
        }
      }
    }

    sections.push(...collectHeadings(node.children ?? [], slugify))
  }

  return sections
}

// Based on https://github.com/jonschlinkert/gray-matter/issues/135#issuecomment-1372552007
const frontmatterDefinition = z.object({
  title: z.string(),
  toc: z.boolean().optional().default(true),
})

export const dynamicParams = false

export async function generateStaticParams() {
  const contentPaths = await globby(path.join(CONTENT_DIR), {
    expandDirectories: { extensions: ["md"] },
  })
  return contentPaths.map((contentPath) => {
    return { slug: path.basename(contentPath, path.extname(contentPath)) }
  })
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { title } = await getMarkdownContent(params.slug)
  return { title: title }
}

async function getMarkdownContent(slug: string | undefined) {
  const filePath = path.join(CONTENT_DIR, slug + ".md")
  const source = fs.readFileSync(filePath, "utf-8")
  const { data: frontmatter } = parse(source, frontmatterDefinition)
  const ast = Markdoc.parse(source)
  const content = Markdoc.transform(ast, config)
  return { content, ...frontmatter }
}

export default async function ContentPage({ params }: PageProps) {
  const { title, toc, content } = await getMarkdownContent(params.slug)
  const tableOfContents = toc ? collectHeadings([content] as Node[]) : []

  return (
    <main className="container relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
      <div className="mx-auto w-full min-w-0">
        <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
          <div className="overflow-hidden text-ellipsis whitespace-nowrap">
            <Link href="/">Overview</Link>
          </div>
          <ChevronRight className="h-4 w-4" />
          <div className="font-medium text-foreground">{title}</div>
        </div>
        <div className="space-y-2">
          <h1 className={cn("scroll-m-20 text-4xl font-bold tracking-tight")}>
            {title}
          </h1>
        </div>

        <div className="pb-12 pt-8">
          {Markdoc.renderers.react(content, React, { components })}
        </div>
        {/* <DocsPager doc={doc} /> */}
      </div>
      {toc && (
        <div className="hidden text-sm xl:block">
          <div className="sticky top-16 -mt-10 h-[calc(100vh-3.5rem)] overflow-hidden border-l pt-6 ">
            <ScrollArea className="pb-10 pl-10">
              <TableOfContents toc={tableOfContents} />
            </ScrollArea>
          </div>
        </div>
      )}
    </main>
  )
}
