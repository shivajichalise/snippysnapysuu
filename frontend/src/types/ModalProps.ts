import { ReactElement } from "react"

interface ModalProps {
  size: "small" | "medium" | "large"
  open: boolean
  position: "right" | "left"
  onClose: () => void
  children: ReactElement
}

export default ModalProps
