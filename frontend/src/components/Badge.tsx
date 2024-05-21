const Badge = ({ text, type, rounded }: BadgeProps) => {
    const shapeClass: string = rounded ? "rounded-lg" : ""

    interface ColorTypes {
        [key: string]: string
    }

    const backgroundColor: ColorTypes = {
        primary: "bg-primary-200",
        secondary: "bg-secondary-200",
        accent: "bg-accent-200",
        success: "bg-success-200",
        error: "bg-error-200",
        info: "bg-info-200",
        warning: "bg-warning-200",
    }

    const textColor: ColorTypes = {
        primary: "text-primary-100",
        secondary: "text-secondary-100",
        accent: "text-accent-100",
        success: "text-success-100",
        error: "text-error-100",
        info: "text-info-100",
        warning: "text-warning-100",
    }

    return (
        <span
            className={`w-fit p-2 text-xs ${backgroundColor[type]} ${textColor[type]} ${shapeClass}`}
        >
            {text}
        </span>
    )
}

export default Badge
