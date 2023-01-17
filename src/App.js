import Attributes from "./components/Attributes";
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
      <Attributes items={attribute}/>
    </div>
  );
}

export default App;
