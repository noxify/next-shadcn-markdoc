import { cn } from "@/lib/utils"

export function AdvancedList({
  children,
  ordered,
  start,
  type,
}: {
  children: any
  ordered: boolean
  start: any
  type: "1" | "a" | "A" | "i" | "I" | undefined
}) {
  const ListElement = ordered ? "ol" : "ul"

  console.log({ children })
  return (
    <ListElement
      start={start}
      type={type}
      className={cn("my-6 ml-6 [&>li]:mt-2")}
    >
      {children}
    </ListElement>
  )
}
