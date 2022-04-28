import Card from '../UI/Card';
import styles from './UserList.module.css';

function UserList(props) {
	let listContent = (
		<li
			className={`${styles['user-list__item']} ${styles['user-list__item--no-items']}`}
		>
			There are no users yet. 🙁 Try adding one.
		</li>
	);

	if (props.users.length) {
		listContent = props.users.map((user, index) => {
			return (
				<li
					key={`user${index + 1}`}
					className={styles['user-list__item']}
				>
					{user.username} ({user.age} years old)
				</li>
			);
		});
	}

	return (
		<Card>
			<h2 className={styles['user-list__title']}>Users</h2>
			<ul className={styles['user-list']}>{listContent}</ul>
		</Card>
	);
}

export default UserList;
