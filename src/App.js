import React, { useState } from "react";
import Attributes from "./components/Attributes";
import NewExpense from "./NewExpense/NewExpense";
const INITIAL_ATTRIBUTES = [
  {
    id: "e1",
    title: "Galaxy S21+",
    amount: 120.0,
    date: new Date(2021, 2, 1),
  },
  {
    id: "e2",
    title: "Galaxy Buds+",
    amount: 18.0,
    date: new Date(2021, 2, 1),
  },
  {
    id: "e3",
    title: "Galaxy Tab S8",
    amount: 68.0,
    date: new Date(2022, 10, 15),
  },
  {
    id: "e4",
    title: "SONY WH-1000XM4",
    amount: 39.9,
    date: new Date(2023, 1, 12),
  },
];
function App() {
  const [attribute, setAttributes] = useState(INITIAL_ATTRIBUTES);

  const addExpenseHandler = (attributes) => {
    setAttributes((prevAttributes) => {
      return [attributes, ...prevAttributes];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Attributes items={attribute} />
    </div>
  );
}

export default App;
