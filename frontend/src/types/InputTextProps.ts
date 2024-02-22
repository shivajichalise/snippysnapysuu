import { ChangeEvent } from "react"

interface InputTextProps {
  inputLabel?: string
  hasLabel?: boolean
  name: string
  placeholder?: string
  id: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export default InputTextProps
