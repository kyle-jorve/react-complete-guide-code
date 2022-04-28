import styles from './Button.module.css';

function Button(props) {
	const buttonType = props.type ? props.type : 'button';

	return (
		<button
			className={`${styles.button}${
				props.className ? ` ${props.className}` : ''
			}`}
			type={buttonType}
			onClick={props.onClick}
		>
			{props.text}
		</button>
	);
}

export default Button;
