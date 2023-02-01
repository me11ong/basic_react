import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Attributes.css";
import Card from "./Card";
import ExpenseFilter from "./ExpenseFilter";

function Attributes(props) {
  const [filteredYear, setFilteredYear] = useState("2021");

  function filterChangeHandler(selectedYear) {
    setFilteredYear(selectedYear);
  }
  return (
    <div>
      <Card className="attributes">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {props.items.map((attribute) => (
          <ExpenseItem
            key={attribute.id}
            title={attribute.title}
            amount={attribute.amount}
            date={attribute.date}
          />
        ))} 
      </Card>
    </div>
  );
}
export default Attributes;
