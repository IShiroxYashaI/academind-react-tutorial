import React, {useState} from 'react';

import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpsensesList from './ExpensesList';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const fileChangeHandler = selectedYear =>{
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter 
        selected={filteredYear} 
        onChangeFilter={fileChangeHandler} 
        />

        <ExpsensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
}

export default Expenses;
