import React, { useState } from "react";
import Select from "react-select";
import "../styling/Form.css";

function Form({ setItems }) {
  const options = Array.from({ length: 20 }, (_, i) => ({
    value: i + 1,
    label: (i + 1).toString(),
  }));

  // selected option == quantity
  const [selectedOption, setSelectedOption] = useState(null);
  const [itemName, setItemName] = useState("");

  const handleChange = (option) => {
    setSelectedOption(option);
  };

  const handleAddItem = () => {
    // Check if both fields are filled
    if (!itemName.trim() || !selectedOption) {
      alert("Please fill in both item name and quantity!");
      return;
    }

    setItems((prevItems) => [
      ...prevItems,
      {
        id: prevItems.length + 1, // Keep your original ID logic
        name: itemName.trim(),
        quantity: selectedOption.value, // Extract the value from the option object
      },
    ]);

    // Clear form after adding item
    setItemName("");
    setSelectedOption(null);
  };

  return (
    <div className="form">
      <div>What do you need for your 😄 trip?</div>

      <div className="dropdown-list">
        <Select
          options={options} // expects array of { value, label }
          value={selectedOption} // must match an option object or be null
          onChange={handleChange}
          isClearable
          placeholder="Choose a number…"
        />
      </div>

      <div className="search-item">
        <input
          type="text"
          placeholder="Item name"
          onChange={(e) => setItemName(e.target.value)}
          value={itemName}
        />
      </div>

      <div className="add-item">
        <button type="submit" onClick={handleAddItem}>
          Add
        </button>
      </div>
    </div>
  );
}

export default Form;
