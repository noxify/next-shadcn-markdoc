import { RefAttributes, useId } from "react"
import {
  AccordionMultipleProps,
  AccordionSingleProps,
} from "@radix-ui/react-accordion"
import slugify from "@sindresorhus/slugify"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function MarkdocAccordion({
  children,
  type = "single",
  collapsible = false,
}: {
  children: any
  type: "single" | "multiple"
  collapsible: boolean
}) {
  console.log({ type })
  return <Accordion type={type}>{children}</Accordion>
}

export function MarkdocAccordionItem({
  title,
  children,
}: {
  children: any
  title: string
}) {
  const id = useId()
  return (
    <AccordionItem value={id}>
      <AccordionTrigger>{title}</AccordionTrigger>
      <AccordionContent>{children}</AccordionContent>
    </AccordionItem>
  )
}
