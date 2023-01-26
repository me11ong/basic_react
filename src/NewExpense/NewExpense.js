import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
function NewExpense() {
    return (
        <div>
            <form className="new-expense">
                <ExpenseForm />
            </form>
        </div>
    );
}
export default NewExpense;