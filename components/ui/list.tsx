import { OlHTMLAttributes } from "react"

import { cn } from "@/lib/utils"

export function TypographyList({
  children,
  ordered,
}: {
  children: any
  ordered: boolean
}) {
  const ListElement = ordered ? "ol" : "ul"

  return (
    <ListElement
      className={cn(
        "my-6 ml-6 [&>li]:mt-2",
        ordered ? "list-decimal" : "list-disc"
      )}
    >
      {children}
    </ListElement>
  )
}
