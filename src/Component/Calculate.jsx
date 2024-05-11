
import React, { useState } from "react";

function Calculate() {
  const [value, setValue] = useState(0);

  const handleAdd = () => {
    setValue((prevValue) => prevValue + 1);
  };

  const handleMinus = () => {
    setValue((prevValue) => prevValue - 1);
  };

  const handleDelete = () => {
    setValue(0); 
  };

  return (
    <div>
      <button className="button is-primary is-light" onClick={handleAdd}>+</button>
      <button className="button is-primary is-light" onClick={handleMinus}>-</button>
      <>Item(S): {value}</>
      <button className="button is-primary is-light" onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Calculate;
