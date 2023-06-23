import { Theme } from "@code-hike/lighter"

export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Next.js",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Overview",
      href: "/",
    },
  ],
  sections: [
    {
      title: "Headings",
      href: "/headings",
    },
    {
      title: "Paragraph",
      href: "/paragraph",
    },
    {
      title: "Blockquote",
      href: "/blockquote",
    },
    {
      title: "List",
      href: "/list",
    },
  ],
  highlighter: {
    theme: {
      light: "github-light" as Theme,
      dark: "github-dark" as Theme,
    },
    lineNumbers: true,
  },
}
