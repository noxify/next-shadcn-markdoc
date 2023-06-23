import { Config, nodes as markdocNodes } from "@markdoc/markdoc"

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
import Callout from "@/components/markdoc/callout"
import Heading from "@/components/markdoc/heading"
import { AdvancedList } from "@/components/markdoc/list"

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
  },
  tags: {
    callout: {
      render: "Callout",
      attributes: {
        title: {
          type: String,
          default: "default title",
        },
      },
    },
    list: {
      render: "AdvancedList",
      attributes: {
        ordered: { type: Boolean, required: false, default: true },
        type: { type: String, required: false, default: "1" },
        start: { type: Number, required: false },
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
  AdvancedList: AdvancedList,
  Table: Table,
  TableHead: TableHead,
  TableHeader: TableHeader,
  TableBody: TableBody,
  TableRow: TableRow,
  TableCell: TableCell,
}

export { config, components }
