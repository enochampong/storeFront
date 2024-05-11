import React, { useState } from "react";
import Calculate from "../Component/Calculate";

function Store() {
  const initialItems = [
    "Spanner",
    "Allen Key",
    "rebike Tape",
    "Printing Paper",
    "Wrap",
    "Stickers",
    "Box size 1(400psc)",
    "Box size 2(400 psc)",
    "Box size 3(400 psc)",
    "Box size 4(400 psc)",
  ];
  const [items, setItems] = useState(initialItems);
  const [newItem, setNewItem] = useState("");

  const handleDelete = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newItem.trim() !== "") {
      setItems([...items, newItem]);
      setNewItem("");
    }
  };

  return (
    <div className="container">
      <p>Inventory order</p>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <Calculate />
            <button
              className="button is-primary is-danger is-light"
              onClick={() => handleDelete(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Enter new item"
        />
        <button className="button is-primary is-light" type="submit">
          Add Item
        </button>
      </form>
    </div>
  );
}

export default Store;
