import { Config, Tag } from "@markdoc/markdoc"

import { TypographyBlockquote } from "@/components/ui/blockquote"
import { TypographyList } from "@/components/ui/list"
import TypographyP from "@/components/ui/paragraph"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  MarkdocAccordion,
  MarkdocAccordionItem,
} from "@/components/markdoc/accordion"
import Callout from "@/components/markdoc/callout"
import { Code } from "@/components/markdoc/code"
import Heading from "@/components/markdoc/heading"
import { MarkdocTab, MarkdocTabs } from "@/components/markdoc/tabs"

const config: Config = {
  nodes: {
    paragraph: {
      render: "Paragraph",
    },
    heading: {
      render: "Heading",
      attributes: {
        id: { type: String },
        level: { type: Number, required: true },
      },
    },
    blockquote: {
      render: "Blockquote",
    },
    list: {
      render: "List",
      attributes: {
        ordered: { type: Boolean, required: false },
      },
    },
    inline: {},

    table: { render: "Table" },
    thead: { render: "TableHeader" },
    th: { render: "TableHead" },
    tr: { render: "TableRow" },
    tbody: { render: "TableBody" },
    td: { render: "TableCell" },
    fence: {
      render: "Code",
      attributes: {
        content: {
          type: String,
        },
        language: {
          type: String,
        },
      },
    },
  },
  tags: {
    callout: {
      render: "Callout",
      attributes: {
        title: {
          type: String,
          default: "default title",
        },
        type: {
          type: String,
          default: "default",
        },
      },
    },
    orderedlist: {
      render: "List",
      attributes: {
        ordered: { type: Boolean, required: false, default: true },
        type: { type: String, required: false },
        start: { type: Number, required: false },
      },
      transform(node, config) {
        const attributes = node.transformAttributes(config)
        const children = node.transformChildren(config)

        const elements = children[0] as any
        if (children.length && elements?.name === "List") {
          elements.attributes = attributes
        }

        return elements
      },
    },

    tabs: {
      render: "Tabs",
      children: ["Tab"],
      transform(node, config) {
        const labels = node
          .transformChildren(config)
          .filter((child: any) => child && child.name === "Tab")
          .map((tab: any) =>
            typeof tab === "object" ? tab?.attributes?.label : null
          )

        const defaultValue = (
          node
            .transformChildren(config)
            .filter((child: any) => child && child.name === "Tab")
            .find((tab: any) => tab?.attributes?.default == true) as any
        )?.attributes?.label

        return new Tag(
          this.render,
          { labels, defaultValue },
          node.transformChildren(config)
        )
      },
    },

    tab: {
      render: "Tab",
      attributes: {
        label: { type: String, required: true },
        default: { type: Boolean, required: false },
      },
    },

    accordion: {
      render: "Accordion",
      children: ["AccordionItem"],
      attributes: {
        type: { type: String },
        collapsible: { type: Boolean, required: false, default: false },
      },
    },

    accordionitem: {
      render: "AccordionItem",
      attributes: {
        title: { type: String, required: true },
      },
    },
  },
}

const components = {
  Paragraph: TypographyP,
  Heading: Heading,
  Blockquote: TypographyBlockquote,
  Callout: Callout,
  List: TypographyList,
  Table: Table,
  TableHead: TableHead,
  TableHeader: TableHeader,
  TableBody: TableBody,
  TableRow: TableRow,
  TableCell: TableCell,
  Tabs: MarkdocTabs,
  Tab: MarkdocTab,
  Code: Code,
  Accordion: MarkdocAccordion,
  AccordionItem: MarkdocAccordionItem,
}

export { config, components }
