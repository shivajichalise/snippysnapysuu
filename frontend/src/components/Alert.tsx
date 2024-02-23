import AlertProps from "../types/AlertProps"

const Alert = (props: AlertProps) => {
    let bgColorClass = "";

    switch (props.type) {
        case "primary":
            bgColorClass = "bg-primary-100";
            break;
        case "secondary":
            bgColorClass = "bg-secondary-100";
            break;
        case "accent":
            bgColorClass = "bg-accent-100"; 
            break;
        case "error":
            bgColorClass = "bg-error-100";
            break;
        case "warning":
            bgColorClass = "bg-warning-100";
            break;
        case "info":
            bgColorClass = "bg-info-100";
            break;
        default:
            bgColorClass = "";
            break;
    }

    return (
        <div className={`${bgColorClass} my-3 rounded-md bg-opacity-40 px-2 py-1`}>
            <h1>alert</h1>
        </div>
    )
}

export default Alert
