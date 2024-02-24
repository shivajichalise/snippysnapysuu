import { ChangeEventHandler, RefObject } from "react"

interface InputTextAreaProps {
    inputLabel?: string
    hasLabel?: boolean
    type?: "text" | string
    name: string
    placeholder?: string
    id: string
    onChange?: ChangeEventHandler<HTMLSelectElement>
    ref?: RefObject<HTMLSelectElement>
    required?: false | boolean
    options: {label: string, value: string}[]
}

export default InputTextAreaProps
