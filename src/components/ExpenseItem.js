import ExpenseDate from './ExpenseDate';
import Card from './Card';
import './style/style.css';

const ExpenseItem = (props) => {
  return (
    <Card className="card expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2 className="expense-item__title">{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
