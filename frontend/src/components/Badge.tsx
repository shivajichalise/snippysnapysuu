const Badge = ({ text, type }: BadgeProps) => {
  const typeToColor = {
    primary: "bg-primary",
    secondary: "bg-secondary",
    accent: "bg-accent",
    info: "bg-info",
    warning: "bg-warning",
    error: "bg-error",
    neutral: "bg-neutral",
  }

  const backgroundColor = typeToColor[type] || "bg-neutral-300"

  return (
    <span
      className={`${backgroundColor} text-${type}-200 w-fit rounded-lg p-2 text-xs`}
    >
      {text}
    </span>
  )
}

export default Badge
