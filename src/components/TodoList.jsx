import "../styling/TodoList.css";
import Item from "./item";

function TodoList({ items, setItems, setCheckedItems }) {
  const handleClearList = () => {
    setItems([]);
    setCheckedItems(0);
  };
  return (
    <div className="todo-list">
      {items.map((item) => (
        <Item
          key={item.id}
          name={item.name}
          quantity={item.quantity}
          id={item.id}
          setCheckedItems={setCheckedItems}
          setItem={setItems}
        />
      ))}

      <span>
        <button className="clear-list" onClick={handleClearList}>
          Clear List
        </button>
      </span>
    </div>
  );
}

export default TodoList;
