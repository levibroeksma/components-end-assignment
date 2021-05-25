import "./Button.css"
function Button({disabled, classNameButton, onClickEvent, onChangeEvent, buttonTitle}) {
    return (
        <button
            type="submit"
            disabled={disabled}
            className={classNameButton}
            onClick={onClickEvent}
            onChange={onChangeEvent}
        >
            {buttonTitle}
        </button>
    )
}

export default Button;