import "../styles/Button.css"

function Button({
    text,
    color = "primary", // valor default
    onClick,
    ...props
}) {
  return (
    <button
        className={`btn-${color}`}
        onClick={onClick}
        {...props}
    >{text}</button>
  )
}

export default Button