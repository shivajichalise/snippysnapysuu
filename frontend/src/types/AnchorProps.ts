import { ReactElement } from "react"

interface AnchorProps {
  to: string
  text: string
  icon: ReactElement | null
  isActive: boolean
}

export default AnchorProps
