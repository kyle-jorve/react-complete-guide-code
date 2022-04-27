import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem(data) {
	const amt =
		data.amount % 1 !== 0 ? Number(data.amount).toFixed(2) : data.amount;

	return (
		<li>
			<Card className="expense-item">
				<ExpenseDate date={data.date} />

				<div className="expense-item__description">
					<h2 className="expense-item__title">{data.title}</h2>

					<div className="expense-item__price">${amt}</div>
				</div>
			</Card>
		</li>
	);
}

export default ExpenseItem;
