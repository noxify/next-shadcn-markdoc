import { slugifyWithCounter } from "@sindresorhus/slugify"

import { cn } from "@/lib/utils"

/**
 * Source: https://github.com/dylanmeivis/nextjs13-starter-markdoc
 */

type HeadingProps = {
  children: any
  level: number
  id: string
}

export default function Heading({ children, level, id }: HeadingProps) {
  const headerId = id || slugifyWithCounter()(children)

  let headingClass = "text-base font-semibold"

  switch (level) {
    case 1:
      headingClass = "text-4xl font-extrabold lg:text-5xl"
      break
    case 2:
      headingClass =
        "border-b pb-2 text-3xl font-semibold transition-colors first:mt-0"
      break
    case 3:
      headingClass = "text-2xl font-semibold"
      break
    case 4:
      headingClass = "text-xl font-semibold"
      break
    case 5:
      headingClass = "text-lg font-semibold"
      break
  }

  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements

  return (
    <HeadingTag
      id={headerId}
      className={cn(headingClass, "my-4 scroll-m-20 tracking-tight")}
    >
      {children}
    </HeadingTag>
  )
}
