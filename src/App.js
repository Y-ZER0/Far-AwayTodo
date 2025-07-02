import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import FooterStats from "./components/footerStats";
import { useState } from "react";

function App() {
  // global state for items
  const [items, setItems] = useState([]);
  const [checkedItems, setCheckedItems] = useState(0);

  return (
    <div>
      <Header />
      <Form setItems={setItems} />
      <TodoList
        items={items}
        setItems={setItems}
        setCheckedItems={setCheckedItems}
      />
      <FooterStats items={items} checkedItems={checkedItems} />
    </div>
  );
}

export default App;
