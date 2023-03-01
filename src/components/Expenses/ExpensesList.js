import React from 'react'
import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

function ExpensesList(props) {
  return (
    <div>
        {props.items.length === 0 ? (
          <p>No Expenses found </p>
        ) : (
            props.items.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )} 
    </div>
  )
}

export default ExpensesList