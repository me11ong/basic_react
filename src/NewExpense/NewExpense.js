import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
function NewExpense(props) {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div>
      <form className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
      </form>
    </div>
  );
}
export default NewExpense;
