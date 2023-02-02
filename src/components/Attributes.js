import React, { useState } from "react";
import "./Attributes.css";
import Card from "./Card";
import ExpenseFilter from "./ExpenseFilter";
import AttributesList from "./AttributesList";

function Attributes(props) {
  const [filteredYear, setFilteredYear] = useState("2021");

  function filterChangeHandler(selectedYear) {
    setFilteredYear(selectedYear);
  }

  const filteredAttributes = props.items.filter((attribute) => {
    return attribute.date.getFullYear().toString() === filteredYear;
  });



  return (
    <div>
      <Card className="attributes">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <AttributesList items={filteredAttributes}/>
      </Card>
    </div>
  );
}
export default Attributes;
