import { AlertCircle, FileWarning, Terminal } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

type CalloutProps = {
  children: any
  title: string
  type?: "info" | "warning" | "error" | "plain"
}

export default function Callout({
  children,
  title,
  type = "plain",
}: CalloutProps) {
  return (
    <Alert>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components and dependencies to your app using the cli.
      </AlertDescription>
    </Alert>
  )
}
