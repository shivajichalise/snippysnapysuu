import { forwardRef } from "react"
import InputTagProps from "../types/InputTagProps"
import Select from "react-select"

const InputTag = forwardRef<HTMLInputElement, InputTagProps>((props) => {
    const {
        id,
        name,
        placeholder,
        hasLabel,
        inputLabel,
        required,
        options,
        handleChange,
    } = props

    return (
        <div className="w-full">
            {hasLabel && (
                <div className="m-1">
                    <label className="text-xs">
                        {inputLabel ?? name.toUpperCase()}{" "}
                        {required && (
                            <span className="text-error-100 text-md">*</span>
                        )}
                    </label>
                </div>
            )}
            <Select
                options={options}
                id={id}
                name={name}
                placeholder={placeholder}
                isMulti
                onChange={handleChange}
                classNames={{
                    placeholder: () => "placeholder-gray-400 text-sm",
                    valueContainer: () => "bg-300",
                    indicatorsContainer: () => "bg-300",
                }}
                styles={{
                    input: (baseStyles) => ({
                        ...baseStyles,
                        color: "white",
                    }),
                    menu: (baseStyles) => ({
                        ...baseStyles,
                        backgroundColor: "#1D1F21",
                    }),
                    option: (baseStyles, state) => ({
                        ...baseStyles,
                        backgroundColor: state.isFocused
                            ? "#FF6600"
                            : "#2C2E30",
                    }),
                    dropdownIndicator: (baseStyles) => ({
                        ...baseStyles,
                        color: "#E0E0E0",
                        width: "1.8rem",
                        cursor: "pointer",
                        ":hover": {
                            color: "#E0E0E0",
                        },
                    }),
                    clearIndicator: (baseStyles) => ({
                        ...baseStyles,
                        color: "#E0E0E0",
                        width: "2rem",
                        ":hover": {
                            color: "#e74c3c",
                        },
                    }),
                    control: (baseStyles, state) => ({
                        ...baseStyles,
                        border: 0,
                        boxShadow: "none",
                        borderRadius: "0.4rem",
                        borderColor: state.isFocused
                            ? "#FF983F !important"
                            : "green",
                    }),
                    indicatorSeparator: (baseStyles) => ({
                        ...baseStyles,
                        display: "none",
                    }),
                    indicatorsContainer: (baseStyles) => ({
                        ...baseStyles,
                        border: "1px solid #444648",
                        borderRadius: "0 0.3rem 0.3rem 0",
                    }),
                    valueContainer: (baseStyles) => ({
                        ...baseStyles,
                        border: "1px solid #444648",
                        borderRadius: "0.3rem 0 0 0.3rem",
                        ":hover": {
                            cursor: "pointer",
                        },
                    }),
                    multiValueLabel: (baseStyles) => ({
                        ...baseStyles,
                        backgroundColor: "#FF6600",
                        borderTopRightRadius: "0",
                        borderBottomRightRadius: "0",
                        color: "white",
                    }),
                    multiValueRemove: (baseStyles) => ({
                        ...baseStyles,
                        backgroundColor: "#FF6600",
                        borderTopLeftRadius: "0",
                        borderBottomLeftRadius: "0",
                        ":hover": {
                            backgroundColor: "#FF7F50",
                        },
                    }),
                }}
            />
        </div>
    )
})

export default InputTag
