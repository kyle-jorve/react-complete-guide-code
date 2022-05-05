import styles from './Button.module.css';

function Button(props) {
    return (
        <button
            type={props.type}
            className={`${styles.button}${props.className ? ` ${props.className}` : ''}`}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    )
}

export default Button;