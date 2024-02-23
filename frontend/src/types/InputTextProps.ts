import { ChangeEvent, RefObject } from "react"

interface InputTextProps {
    inputLabel?: string
    hasLabel?: boolean
    name: string
    placeholder?: string
    id: string
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    ref?: RefObject<HTMLInputElement>
}

export default InputTextProps
