import React, { useState } from "react";
import "../styling/item.css";

function Item({ name, quantity, setCheckedItems, setItem, id }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    setIsChecked(!isChecked);

    if (!isChecked) {
      // Item is being checked - add 1
      setCheckedItems((prevCheckedItems) => prevCheckedItems + 1);
    } else {
      // Item is being unchecked - subtract 1
      setCheckedItems((prevCheckedItems) => prevCheckedItems - 1);
    }
  };

  const handleDelete = () => {
    setItem((prevItems) => prevItems.filter((item) => item.id !== id));

    if (isChecked) setCheckedItems((prevCheckedItems) => prevCheckedItems - 1);
  };

  return (
    <div className="item">
      <span>
        <label>
          <input type="checkbox" onChange={handleCheck} checked={isChecked} />
        </label>
      </span>
      <span className="item-quantity">{quantity}</span>
      <span className="item-name">{name}</span>
      <span className="item-delete">
        <button onClick={handleDelete}>X</button>
      </span>
    </div>
  );
}

export default Item;
