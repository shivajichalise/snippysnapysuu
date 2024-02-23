import AlertProps from "../types/AlertProps"

const SpanAlert = (props: AlertProps) => {
    let textColorClass = "";

    switch (props.type) {
        case "primary":
            textColorClass = "text-primary-100";
            break;
        case "secondary":
            textColorClass = "text-secondary-100";
            break;
        case "accent":
            textColorClass = "text-accent-100"; 
            break;
        case "error":
            textColorClass = "text-error-100";
            break;
        case "warning":
            textColorClass = "text-warning-100";
            break;
        case "info":
            textColorClass = "text-info-100";
            break;
        default:
            textColorClass = "";
            break;
    }

    return (
        <div className="mx-1">
            <span className={`${textColorClass} text-xs`}>{props.message}</span>
        </div>
    )
}

export default SpanAlert
