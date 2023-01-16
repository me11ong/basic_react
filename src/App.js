import ExpenseItem from "./components/ExpenseItem";

function App() {
  const attribute = [
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

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={attribute[0].title}
        amount={attribute[0].amount}
        date={attribute[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={attribute[1].title}
        amount={attribute[1].amount}
        date={attribute[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={attribute[2].title}
        amount={attribute[2].amount}
        date={attribute[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={attribute[3].title}
        amount={attribute[3].amount}
        date={attribute[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
