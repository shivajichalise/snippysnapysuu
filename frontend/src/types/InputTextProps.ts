import { ChangeEvent, RefObject } from "react"

interface InputTextProps {
    inputLabel?: string
    hasLabel?: boolean
    type?: "text" | string
    name: string
    placeholder?: string
    id: string
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    ref?: RefObject<HTMLInputElement>
    required?: false | boolean
}

export default InputTextProps
