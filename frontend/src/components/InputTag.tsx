import { forwardRef } from "react"
import InputTagProps from "../types/InputTagProps"
import Select from "react-select"

const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
]

const onHover = () => ({
    ":hover": {
        borderColor: "red !important",
    },
})

const InputTag = forwardRef<HTMLInputElement, InputTagProps>((props) => {
    const { id, name, placeholder, hasLabel, inputLabel, required } = props

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
                classNames={{
                    placeholder: () => "placeholder-gray-400 text-sm",
                    valueContainer: () => "bg-300",
                    indicatorsContainer: () => "bg-300",
                }}
                styles={{
                    menu: (baseStyles) => ({
                        ...baseStyles,
                        backgroundColor: "#1D1F21 !important",
                        marginBottom: "5rem",
                    }),
                    menuList: (baseStyles) => ({
                        ...baseStyles,
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
                    }),
                    control: (baseStyles, state) => ({
                        ...baseStyles,
                        border: 0,
                        boxShadow: "none",
                        borderRadius: "0.4rem",
                        borderColor: state.isFocused
                            ? "#FF983F !important"
                            : "green",
                        ...onHover,
                    }),
                    indicatorSeparator: (baseStyles) => ({
                        ...baseStyles,
                        display: "none",
                    }),
                    indicatorsContainer: (baseStyles) => ({
                        ...baseStyles,
                        border: "1px solid #444648",
                        borderRadius: "0 0.3rem 0.3rem 0",
                        ...onHover,
                    }),
                    valueContainer: (baseStyles) => ({
                        ...baseStyles,
                        border: "1px solid #444648",
                        borderRadius: "0.3rem 0 0 0.3rem",
                        ":hover": {
                            cursor: "pointer",
                        },
                    }),
                }}
            />
        </div>
    )
})

export default InputTag
