import React, { useState } from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const initialExpenses = [
	{
		title: 'Rent',
		amount: 1700,
		date: new Date(2022, 2, 1),
	},
	{
		title: 'Groceries',
		amount: 400,
		date: new Date(2022, 1, 8),
	},
	{
		title: 'iPad Pro',
		amount: 1200,
		date: new Date(2022, 3, 22),
	},
	{
		title: 'PlayStation 5',
		amount: 800,
		date: new Date(2022, 4, 2),
	},
	{
		title: 'Tasty Treat',
		amount: 80,
		date: new Date(2021, 3, 5),
	},
	{
		title: 'MacBook Pro',
		amount: 5000,
		date: new Date(2019, 10, 20),
	},
];

initialExpenses.forEach((ex, index) => (ex.id = `e${index + 1}`));

function App() {
	const [expenses, setExpenses] = useState(initialExpenses);
	const [showNewExpenseForm, setShowNewExpenseForm] = useState(false);
	let formContent = (
		<div className="new-expense__button-row">
			<button
				className="new-expense__add-expense-button"
				onClick={showExpenseFormHandler}
				aria-label="add new expense"
			>
				+
				<span className="new-expense__button-tooltip">
					Add new expense
				</span>
			</button>
		</div>
	);

	if (showNewExpenseForm) {
		formContent = (
			<NewExpense
				onAddExpense={addExpenseHandler}
				onCancel={cancelAddExpense}
			/>
		);
	}

	function cancelAddExpense() {
		setShowNewExpenseForm(false);
	}

	function showExpenseFormHandler() {
		setShowNewExpenseForm(true);
	}

	function addExpenseHandler(expense) {
		setExpenses(prevState => {
			return [expense, ...prevState];
		});
	}

	return (
		<section className="wrapper">
			{formContent}
			<Expenses expenses={expenses} />
		</section>
	);
}

export default App;
