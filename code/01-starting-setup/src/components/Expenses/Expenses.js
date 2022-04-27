import React, { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';
import ExpensesChart from './ExpensesChart';
import Card from '../UI/Card';
import './Expenses.css';

function Expenses(data) {
	const thisYear = new Date().getFullYear();
	const [filterYear, setFilterYear] = useState(thisYear);
	const filteredExpenses = data.expenses.filter(
		ex => ex.date.getFullYear() == filterYear
	);

	function yearChangeHandler(year) {
		setFilterYear(year);
	}

	return (
		<div>
			<Card className="expenses">
				<ExpenseFilter
					onYearChange={yearChangeHandler}
					defaultYear={thisYear}
				/>

				<ExpensesChart expenses={filteredExpenses} />

				<ExpensesList expenses={filteredExpenses} />
			</Card>
		</div>
	);
}

export default Expenses;
