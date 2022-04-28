import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import styles from './Form.module.css';

function Form(props) {
	const fieldsObj = {
		username: '',
		age: '',
	};
	const [userInput, setUserInput] = useState(fieldsObj);

	function addUserHandler(event) {
		const userValid = userInput.username.trim().length > 0;
		const ageFilled = userInput.age.length;
		const ageValid = ageFilled && userInput.age > 0;
		let modalMessage = [];

		event.preventDefault();

		if (!userValid || !ageValid) {
			if (!userValid)
				modalMessage.push(
					'Please enter a valid name (non-empty value).'
				);

			if (!ageFilled)
				modalMessage.push(
					'Please enter a valid age (non-empty value).'
				);

			if (ageFilled && !ageValid)
				modalMessage.push('Please enter a valid age (greater than 0).');

			props.onInvalidInput(modalMessage);

			return;
		}

		props.onAddUser(userInput);

		clearUserInput();
	}

	function usernameChangeHandler(event) {
		setUserInput(prevState => {
			return {
				...prevState,
				username: event.target.value,
			};
		});
	}

	function ageChangeHandler(event) {
		setUserInput(prevState => {
			return {
				...prevState,
				age: event.target.value,
			};
		});
	}

	function clearUserInput() {
		setUserInput(fieldsObj);
	}

	return (
		<Card>
			<form className={styles.form} onSubmit={addUserHandler}>
				<div>
					<label htmlFor="username" className={styles['form__label']}>
						Username
					</label>
					<input
						type="text"
						id="username"
						className={styles['form__input']}
						onChange={usernameChangeHandler}
						value={userInput.username}
					/>
				</div>

				<div>
					<label htmlFor="age" className={styles['form__label']}>
						Age (years)
					</label>
					<input
						type="number"
						min="0"
						id="age"
						className={styles['form__input']}
						onChange={ageChangeHandler}
						value={userInput.age}
					/>
				</div>

				<div className={styles['form__button-row']}>
					<Button type="submit" text="Add User" />
				</div>
			</form>
		</Card>
	);
}

export default Form;
