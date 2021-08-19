import React from "react";

import "./TodoItem.css";
import buttonTrash from "../../images/svg/trash-alt-solid.svg";
import buttonImportant from "../../images/svg/exclamation-circle-solid.svg";

function TodoItem() {
  return (
    <div className="todo-item">
      <p className="todo-item__title">123</p>

      <div className="todo-item__wrapp-btn">
        <button type="button" className="todo-item__btn">
          <img src={buttonTrash} alt="delete." className="todo-item__icon" />
        </button>
        <button type="button" className="todo-item__btn">
          <img
            src={buttonImportant}
            alt="mark as important."
            className="todo-item__icon"
          />
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
