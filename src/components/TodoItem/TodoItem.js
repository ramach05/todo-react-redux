import React, { useState } from "react";

import "./TodoItem.css";
import trashButton from "../../images/svg/delete_forever_white_24dp.svg";
import importantButton from "../../images/svg/warning_amber_white_24dp.svg";
import importantActiveButton from "../../images/svg/warning-active_amber_orange_24dp.svg";

function TodoItem({ title, important, onDeleted }) {
  const [isDoneItem, setIsDoneItem] = useState(false);
  const [isImportant, setIsImportant] = useState(important);

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

  function renderTitleClassName() {
    if (isDoneItem && isImportant) {
      return "todo-item__title todo-item__title_done todo-item__title_important";
    }
    if (isDoneItem && !isImportant) {
      return "todo-item__title todo-item__title_done";
    }
    if (!isDoneItem && isImportant) {
      return "todo-item__title todo-item__title_important";
    }
    return "todo-item__title";
  }

  function handleImportantButton() {
    setIsImportant((isImportant) => !isImportant);
  }

  return (
    <li className="todo-item" onClick={handleDone}>
      <p className={renderTitleClassName()}>{title}</p>

      <div className="todo-item__wrapp-btn">
        <button
          type="button"
          className="todo-item__btn"
          disabled={isDoneItem ? true : false}
          onClick={handleImportantButton}
        >
          <img
            src={isImportant ? importantActiveButton : importantButton}
            alt="mark as important."
            className={
              isDoneItem
                ? "todo-item__icon todo-item__icon_important_done"
                : "todo-item__icon"
            }
          />
          {isDoneItem ? null : (
            <div className="todo-item__btn-hint">mark as important</div>
          )}
        </button>

        <button type="button" className="todo-item__btn" onClick={onDeleted}>
          <img
            src={trashButton}
            alt="delete task."
            className="todo-item__icon"
          />
          <div className="todo-item__btn-hint">delete</div>
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
