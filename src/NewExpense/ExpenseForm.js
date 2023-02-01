

import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {

    const [enteredTitle, SetEnteredTitle] = useState('');
    const [enteredDate, SetEnteredDate] = useState('');
    const [enteredAmount, SetEnteredAmount] = useState('');

    const titlechangeHandler = (event) => {
        SetEnteredTitle(event.target.value);
    }
    const amountchangeHandler = (event) => {
        SetEnteredAmount(event.target.value);
    }
    const datechangeHandler = (event) => {
        SetEnteredDate(event.target.value);
    }

    const submitHandler = (event) => {
        
        event.preventDefault()
        console.log(enteredTitle);
        console.log(enteredAmount);
        console.log(enteredDate);

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        };
        
        props.onSaveExpenseData(expenseData);
        SetEnteredTitle('');
        SetEnteredAmount('');
        SetEnteredDate('');

    }

    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' onChange={titlechangeHandler} />
                </div>
            </div>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' min='0.0' step='0.5' onChange={amountchangeHandler} />
                </div>
            </div>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' min="2021-01-01" max="2023-12-31" onChange={datechangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type='submit' onClick={submitHandler}>New Item</button>
            </div>
        </form>
    );
}
export default ExpenseForm;