import styles from './Card.module.css';

function Card(props) {
	return (
		<div
			className={`${styles.card}${
				props.className ? ` ${props.classname}` : ''
			}`}
		>
			{props.children}
		</div>
	);
}

export default Card;
