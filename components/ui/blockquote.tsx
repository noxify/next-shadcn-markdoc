import { ReactNode } from "react"

// Source: https://ui.shadcn.com/docs/components/typography
export function TypographyBlockquote({ children }: { children: ReactNode }) {
  return (
    <blockquote className="mt-6 border-l-2 pl-6 italic">{children}</blockquote>
  )
}
