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

  const filteredAttributes = props.items.filter((attribute) => {
    return attribute.date.getFullYear().toString() === filteredYear;
  });

  let attributesContent = <p>No Attributes found.</p>;

  if (filteredAttributes.length > 0) {
    attributesContent = filteredAttributes.map((attribute) => (
      <ExpenseItem
        key={attribute.id}
        title={attribute.title}
        amount={attribute.amount}
        date={attribute.date}
      />
    ));
  }

  return (
    <div>
      <Card className="attributes">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {attributesContent}
      </Card>
    </div>
  );
}
export default Attributes;
