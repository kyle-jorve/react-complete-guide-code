import React, { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm(data) {
	const dateNow = new Date();
	const dateString = `${dateNow.getFullYear()}-${dateNow.toLocaleString(
		'en-us',
		{ month: '2-digit' }
	)}-${dateNow.toLocaleString('en-us', { day: '2-digit' })}`;

	const [userInput, setUserInput] = useState({
		title: '',
		amount: '',
		date: dateString,
	});

	function titleChangeHandler(event) {
		setUserInput(prevState => {
			return {
				...prevState,
				title: event.target.value,
			};
		});
	}

	function amountChangeHandler(event) {
		setUserInput(prevState => {
			return {
				...prevState,
				amount: event.target.value,
			};
		});
	}

	function dateChangeHandler(event) {
		setUserInput(prevState => {
			return {
				...prevState,
				date: event.target.value,
			};
		});
	}

	function formSubmitHandler(event) {
		const expenseData = {
			title: userInput.title,
			amount: Number(userInput.amount),
			date: new Date(userInput.date),
		};

		data.onAddExpense(expenseData);

		clearUserInput();

		event.preventDefault();
	}

	function clearUserInput() {
		setUserInput({
			title: '',
			amount: '',
			date: dateString,
		});
	}

	function cancelExpenseFormHandler() {
		clearUserInput();

		data.onCancel();
	}

	return (
		<form className="new-expense__form" onSubmit={formSubmitHandler}>
			<div className="new-expense__control">
				<label>Title</label>
				<input
					type="text"
					value={userInput.title}
					onChange={titleChangeHandler}
				/>
			</div>
			<div className="new-expense__control">
				<label>Amount</label>
				<input
					type="number"
					min="0.01"
					step="0.01"
					value={userInput.amount}
					onChange={amountChangeHandler}
				/>
			</div>
			<div className="new-expense__control">
				<label>Date</label>
				<input
					type="date"
					value={userInput.date}
					onChange={dateChangeHandler}
				/>
			</div>

			<div className="new-expense__actions">
				<button
					className="new-expense__button new-expense__button--cancel"
					type="button"
					onClick={cancelExpenseFormHandler}
				>
					Cancel
				</button>
				<button
					className="new-expense__button new-expense__button--submit"
					type="submit"
				>
					Add Expense
				</button>
			</div>
		</form>
	);
}

export default ExpenseForm;
