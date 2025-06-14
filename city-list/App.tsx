import ListGroup from "./Components/ListGroup";

function App() {
  let items = [
    "New York",
    "San Francisco",
    "Chicago",
    "Houston",
    "Los Angeles",
  ];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
