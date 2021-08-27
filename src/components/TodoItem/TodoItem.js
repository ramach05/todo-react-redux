import React, { useState } from "react";

import "./TodoItem.css";
import buttonTrash from "../../images/svg/delete_forever_white_24dp.svg";
import buttonImportant from "../../images/svg/warning_amber_white_24dp.svg";

function TodoItem() {
  const [isDoneItem, setIsDoneItem] = useState(false);

  function handleDone(e) {
    if (
      e.target.className === "todo-item" ||
      e.target.className === "todo-item todo-item_done"
    ) {
      console.log("1 :>> ", 1);

      setIsDoneItem(!isDoneItem);
      return;
    }
    if (e.target.className.includes("todo-item__title")) {
      console.log("2 :>> ", 2);

      setIsDoneItem(!isDoneItem);
      return;
    }
  }

  return (
    <li
      className={isDoneItem ? "todo-item todo-item_done" : "todo-item"}
      onClick={handleDone}
    >
      <p className="todo-item__title">lorem</p>

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
