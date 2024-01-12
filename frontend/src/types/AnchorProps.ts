import { ReactElement } from "react"

interface AnchorProps {
  to: string
  text: string
  icon: ReactElement | null
  isActive: boolean
  select: (tab: string) => void
}

export default AnchorProps
