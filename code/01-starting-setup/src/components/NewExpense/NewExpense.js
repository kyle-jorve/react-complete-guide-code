import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

function NewExpense(data) {
	function addExpenseHandler(userInput) {
		const expenseData = {
			...userInput,
			id: Math.random().toString(),
		};

		data.onAddExpense(expenseData);
	}

	function cancelAddExpense() {
		data.onCancel();
	}

	return (
		<div className="new-expense">
			<ExpenseForm
				onAddExpense={addExpenseHandler}
				onCancel={cancelAddExpense}
			/>
		</div>
	);
}

export default NewExpense;
