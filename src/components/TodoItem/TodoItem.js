import React, { useState } from "react";

import "./TodoItem.css";
import buttonTrash from "../../images/svg/delete_forever_white_24dp.svg";
import buttonImportant from "../../images/svg/warning_amber_white_24dp.svg";
import buttonImportantActive from "../../images/svg/warning-active_amber_orange_24dp.svg";

function TodoItem() {
  const [isDoneItem, setIsDoneItem] = useState(false);
  const [isImportant, setIsImportant] = useState(false);

  function handleDone(e) {
    if (
      e.target.className === "todo-item" ||
      e.target.className === "todo-item todo-item_done"
    ) {
      return setIsDoneItem((isDoneItem) => !isDoneItem);
    }
    if (e.target.className.includes("todo-item__title")) {
      return setIsDoneItem((isDoneItem) => !isDoneItem);
    }
  }

  function handleImportantButton() {
    setIsImportant((isImportant) => !isImportant);
  }

  function renderTitleClassName() {
    switch (true) {
      case isDoneItem && isImportant:
        return "todo-item__title todo-item__title_done todo-item__title_important";
      case isDoneItem && !isImportant:
        return "todo-item__title todo-item__title_done";
      case !isDoneItem && isImportant:
        return "todo-item__title todo-item__title_important";

      default:
        return "todo-item__title";
    }
  }

  return (
    <li className="todo-item" onClick={handleDone}>
      <p className={renderTitleClassName()}>lorem</p>

      <div className="todo-item__wrapp-btn">
        <button
          type="button"
          className="todo-item__btn"
          disabled={isDoneItem ? true : false}
          onClick={handleImportantButton}
        >
          <img
            src={isImportant ? buttonImportantActive : buttonImportant}
            alt="mark as important."
            className={
              isDoneItem
                ? "todo-item__icon todo-item__icon_important_done"
                : "todo-item__icon"
            }
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
