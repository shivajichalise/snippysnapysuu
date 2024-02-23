import { ReactElement } from "react"

interface ButtonProps {
  type: "primary" | "secondary" | "accent" | "error" | "warning" | "info"
  onClick: (() => void ) | ((e: MouseEvent) => void)
  children: ReactElement
}

export default ButtonProps
