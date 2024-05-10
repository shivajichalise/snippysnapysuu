interface InputTagProps {
    inputLabel?: string
    hasLabel?: boolean
    name: string
    placeholder?: string
    id: string
    required?: false | boolean
    options: { value: string; label: string }[]
}

export default InputTagProps
