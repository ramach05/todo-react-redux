import React from "react";

import "./TodoItem.css";
import buttonTrash from "../../images/svg/trash-alt-solid.svg";
import buttonImportant from "../../images/svg/exclamation-circle-solid.svg";

function TodoItem() {
  return (
    <li className="todo-item">
      123
      <button type="button" className="todo-item__btn">
        Delete
        <img src={buttonTrash} alt="delete." className="todo-item__icon" />
      </button>
      <button type="button" className="todo-item__btn">
        Important
        <img
          src={buttonImportant}
          alt="mark as important."
          className="todo-item__icon"
        />
      </button>
    </li>
  );
}

export default TodoItem;
