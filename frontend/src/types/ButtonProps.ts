import { ReactElement } from "react"

interface ButtonProps {
    icon?: ReactElement | null
    type: "primary" | "secondary" | "accent" | "error" | "warning" | "info"
    onClick: (() => void) | ((e: MouseEvent) => void)
    text?: string
    children?: ReactElement
}

export default ButtonProps
