import React, { useState } from 'react';

import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
const NewExpense = (props) => {
   const onSaveExpenseDateHandler = (enteredExpenseData) => {
      const expenseData = {
         ...enteredExpenseData,
         id: Math.random().toString(),
      };
      props.onAddExpense(expenseData);
   };

   return (
      <div className="new-expense">
         <ExpenseForm onSaveExpenseDate={onSaveExpenseDateHandler} />
      </div>
   );
};
export default NewExpense;
