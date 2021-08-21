import React from "react";

import "./TodoItem.css";
import buttonTrash from "../../images/svg/delete_forever_white_24dp.svg";
import buttonImportant from "../../images/svg/warning_amber_white_24dp.svg";

function TodoItem() {
  return (
    <li className="todo-item">
      <p className="todo-item__title">123</p>

      <div className="todo-item__wrapp-btn">
        <button type="button" className="todo-item__btn">
          <img
            src={buttonImportant}
            alt="mark as important."
            className="todo-item__icon"
          />
        </button>
        <button type="button" className="todo-item__btn">
          <img
            src={buttonTrash}
            alt="delete task."
            className="todo-item__icon"
          />
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
