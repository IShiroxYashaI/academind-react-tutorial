import React from "react";

import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'

const ExpsensesList=props=>{
    let expenseContent= <p>No expenses found</p>;

    if (props.items.length>0){
        expenseContent=props.items.map((expense) => (
        <ExpenseItem 
            key={expense.id}
            title={expense.title} 
            amount={expense.amount} 
            date={expense.date}
        />
        ));
    }

    return (
        <ul className="expenses-list">
            {expenseContent}
        </ul>
    )
};
export default ExpsensesList;