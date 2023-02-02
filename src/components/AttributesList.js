import "./AttributesList.css";
import ExpenseItem from "./ExpenseItem.js"

function AttributesList(props) {
  
 
  if (props.items.length === 0) {
    return <h2 className='expenses-list__fallback'>Found No Attributes.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((attribute) => (
        <ExpenseItem
          key={attribute.id}
          title={attribute.title}
          amount={attribute.amount}
          date={attribute.date}
        />
      ))}
    </ul>
  );
}
export default AttributesList;
