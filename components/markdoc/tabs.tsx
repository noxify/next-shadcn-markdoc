import slugify from "@sindresorhus/slugify"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function MarkdocTabs({
  children,
  labels,
  defaultValue,
}: {
  children: any
  labels: string[]
  defaultValue?: string
}) {
  return (
    <Tabs defaultValue={slugify(defaultValue || labels[0])}>
      <TabsList>
        {labels.map((label, key) => (
          <TabsTrigger key={key} value={slugify(label)}>
            {label}
          </TabsTrigger>
        ))}
      </TabsList>
      {children}
    </Tabs>
  )
}

export function MarkdocTab({
  children,
  label,
}: {
  children: any
  label: string
}) {
  return <TabsContent value={slugify(label)}>{children}</TabsContent>
}
