import {
  Terminal as DefaultIcon,
  XCircle as ErrorIcon,
  Info as InfoIcon,
  CheckCircle2 as SuccessIcon,
  AlertTriangle as WarningIcon,
} from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

type CalloutProps = {
  children: any
  title: string
  type?: "info" | "success" | "warning" | "error" | "default"
}

export default function Callout({
  children,
  title,
  type = "default",
}: CalloutProps) {
  let IconComponent = DefaultIcon
  switch (type) {
    case "info":
      IconComponent = InfoIcon
      break
    case "success":
      IconComponent = SuccessIcon
      break
    case "warning":
      IconComponent = WarningIcon
      break
    case "error":
      IconComponent = ErrorIcon
      break
  }

  return (
    <Alert variant={type}>
      <IconComponent className="h-4 w-4" />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{children}</AlertDescription>
    </Alert>
  )
}
