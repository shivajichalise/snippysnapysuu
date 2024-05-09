import { ChangeEvent, RefObject } from "react"

interface InputTagProps {
    inputLabel?: string
    hasLabel?: boolean
    name: string
    placeholder?: string
    id: string
    required?: false | boolean
}

export default InputTagProps
