import { forwardRef } from "react"
import InputTextProps from "../types/InputTextProps"

const InputText = forwardRef<HTMLInputElement, InputTextProps>((props, ref) => {
    const {id, name, placeholder, onChange, hasLabel, inputLabel} = props

    return (
        <div>
            {hasLabel && (
                <div className="m-1">
                    <label className="text-xs">{inputLabel ?? name.toUpperCase()}</label>
                </div>
            )}
            <input
                type='text'
                className='focus:border-primary-200 text-text-200 bg-300 border-100 block w-full rounded-lg border p-2.5 text-sm placeholder-gray-400 outline-none'
                id={id}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                ref={ref}
            />
        </div>
    )
})

export default InputText
