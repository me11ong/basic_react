import React, {useState} from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
function NewExpense(props) {
  
  const [IsEditing,SetIsEditing]=useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {

    
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);

    SetIsEditing(false);
  };
  const StartEditingHandler=()=>
  {
    SetIsEditing(true);
  }
  const StopEditingHandler=()=>
  {
    SetIsEditing(false);
  }

  return (
    <div>
      <div className="new-expense">
        {!IsEditing && <button onClick={StartEditingHandler}>Add New Item</button>}
        {IsEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={StopEditingHandler}/>}
      </div>
    </div>
  );
}
export default NewExpense;
