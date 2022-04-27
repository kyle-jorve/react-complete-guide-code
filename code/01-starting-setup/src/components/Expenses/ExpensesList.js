import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

function ExpensesList(data) {
	const noExpensesMessage = (
		<p className="expenses-list__fallback">No expenses found. 🙁</p>
	);

	data.expenses.sort((a, b) => b.date - a.date);

	if (data.expenses.length === 0) {
		return noExpensesMessage;
	}

	return (
		<ul className="expenses-list">
			{data.expenses.map(item => {
				return (
					<ExpenseItem
						key={item.id}
						title={item.title}
						amount={item.amount}
						date={item.date}
					/>
				);
			})}
		</ul>
	);
}

export default ExpensesList;
