import { ChangeEventHandler, RefObject } from "react"

interface InputTextAreaProps {
    inputLabel?: string
    hasLabel?: boolean
    type?: "text" | string
    name: string
    placeholder?: string
    id: string
    onChange?: ChangeEventHandler<HTMLTextAreaElement>
    ref?: RefObject<HTMLInputElement>
    required?: false | boolean
    rows: number
}

export default InputTextAreaProps
