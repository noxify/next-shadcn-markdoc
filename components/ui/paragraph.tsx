// Source: https://ui.shadcn.com/docs/components/typography
import { ReactNode } from "react"

export default function TypographyP({ children }: { children: ReactNode }) {
  return <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>
}
