import "../styling/TodoList.css";
import Item from "./item";
import Select from "react-select";
import { useState } from "react";

function TodoList({ items, setItems, setCheckedItems }) {
  const options = [
    { value: "Sort By Input Order", label: "Sort By Input Order" },
    { value: "Sort By Item Name", label: "Sort By Item Name" },
    { value: "Sort By Quantity", label: "Sort By Quantity" },
  ];

  const handleClearList = () => {
    if (window.confirm("Are you sure you want to clear the list?")) {
      setItems([]);
      setCheckedItems(0);
    }
  };

  const handleSortItems = (selectedOption) => {
    setSelectedOption(selectedOption);

    selectedOption.value === "Sort By Input Order"
      ? setItems([...items].sort((a, b) => a.id - b.id))
      : selectedOption.value === "Sort By Item Name"
      ? setItems([...items].sort((a, b) => a.name.localeCompare(b.name)))
      : setItems([...items].sort((a, b) => b.quantity - a.quantity));
  };

  const [selectedOption, setSelectedOption] = useState("Sort By Input Order");

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

      <div className="controls-container">
        <div className="sortedItems-list">
          <Select
            options={options}
            value={selectedOption}
            onChange={(selectedOption) => handleSortItems(selectedOption)}
            isClearable
            placeholder="Sort by..."
            menuPosition="fixed"
            menuPlacement="bottom"
            menuPortalTarget={document.body}
          />
        </div>

        <button className="clear-list" onClick={handleClearList}>
          Clear List
        </button>
      </div>
    </div>
  );
}

export default TodoList;
