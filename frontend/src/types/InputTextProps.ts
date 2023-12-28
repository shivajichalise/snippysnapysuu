import { ChangeEvent } from "react"

interface InputTextProps {
  name: string
  placeholder: string
  id: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export default InputTextProps
