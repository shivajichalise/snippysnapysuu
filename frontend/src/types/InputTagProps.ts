import { ActionMeta } from "react-select"
import TagForOption from "./TagForOption"

interface InputTagProps {
    inputLabel?: string
    hasLabel?: boolean
    name: string
    placeholder?: string
    id: string
    required?: false | boolean
    options: { value: string; label: string }[]
    handleChange: (
        option: readonly TagForOption[],
        actionMeta: ActionMeta<TagForOption>
    ) => void
}

export default InputTagProps
