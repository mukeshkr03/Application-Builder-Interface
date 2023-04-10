import React from "react";
import "./Dropdownbutton.css";

function Dropdownbutton() {
  return (
    <select className="selectItems">
      <option value="fruit">Fruit</option>
      <option value="vegetable">Vegetable</option>
      <option value="meat">Meat</option>
    </select>
  );
}

export default Dropdownbutton;
