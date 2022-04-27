import Card from '../UI/Card';
import './ExpenseDate.css';

function ExpenseDate(data) {
    const dateStrings = {
        month: data.date.toLocaleString('en-us', { month: 'long' }),
        year: data.date.getFullYear(),
        day: data.date.toLocaleString('en-us', { day: '2-digit' })
    };
    
    return (
        <Card className="expense-date">
            <div className="expense-date__month">{dateStrings.month}</div>
            <div className="expense-date__day">{dateStrings.day}</div>
            <div className="expense-date__year">{dateStrings.year}</div>
        </Card>
    )
}

export default ExpenseDate;