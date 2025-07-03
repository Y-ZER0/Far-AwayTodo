import React, { useState } from "react";
import Select from "react-select";
import "../styling/Form.css";

function Form({ setItems }) {
  const options = Array.from({ length: 20 }, (_, i) => ({
    value: i + 1,
    label: (i + 1).toString(),
  }));

  const [selectedOption, setSelectedOption] = useState(null);
  const [itemName, setItemName] = useState("");

  const handleAddItem = (e) => {
    e.preventDefault();
    if (!itemName.trim() || !selectedOption) {
      alert("Please fill in both item name and quantity!");
      return;
    }

    setItems((prevItems) => [
      ...prevItems,
      {
        id: prevItems.length + 1,
        name: itemName.trim(),
        quantity: selectedOption.value,
      },
    ]);

    setItemName("");
    setSelectedOption(null);
  };

  return (
    <form className="form" onSubmit={handleAddItem}>
      <div>What do you need for your 😄 trip?</div>

      <div className="dropdown-list">
        <Select
          options={options}
          value={selectedOption}
          onChange={setSelectedOption}
          isClearable
          placeholder="Quantity"
        />
      </div>

      <div className="search-item">
        <input
          type="text"
          placeholder="Item name"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
      </div>

      <div className="add-item">
        <button type="submit">Add</button>
      </div>
    </form>
  );
}

export default Form;
