import { forwardRef } from "react"
import InputSelectProps from "../types/InputSelectProps"

const InputSelect = forwardRef<HTMLSelectElement, InputSelectProps>(
    (props, ref) => {
        const { id, name, onChange, hasLabel, inputLabel, required, options } =
            props

        return (
            <div className="w-full">
                {hasLabel && (
                    <div className="m-1">
                        <label className="text-xs">
                            {inputLabel ?? name.toUpperCase()}{" "}
                            {required && (
                                <span className="text-error-100 text-md">
                                    *
                                </span>
                            )}
                        </label>
                    </div>
                )}
                <select
                    className="focus:border-primary-200 text-text-200 bg-300 border-100 block w-full rounded-lg border p-2.5 text-sm placeholder-gray-400 outline-none"
                    id={id}
                    name={name}
                    onChange={onChange}
                    ref={ref}
                >
                    {options.map((op) => (
                        <option key={op.value} value={op.value}>
                            {op.label}
                        </option>
                    ))}
                </select>
            </div>
        )
    }
)

export default InputSelect
