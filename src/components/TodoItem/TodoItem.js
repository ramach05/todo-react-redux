import React from "react";

import "./TodoItem.css";
import trashButton from "../../images/svg/delete_forever_white_24dp.svg";
import importantButton from "../../images/svg/warning_amber_white_24dp.svg";
import importantActiveButton from "../../images/svg/warning-active_amber_orange_24dp.svg";

function TodoItem({
  title,
  isImportant,
  isDone,
  onDeleted,
  onToggleDone,
  onToggleImportant,
}) {
  function handleToggleDone(e) {
    if (
      e.target.className === "todo-item" ||
      e.target.className === "todo-item todo-item_done" ||
      e.target.className.includes("todo-item__title")
    ) {
      onToggleDone();
    }
  }

  function renderTitleClassName() {
    if (isDone && isImportant) {
      return "todo-item__title todo-item__title_done todo-item__title_important";
    }
    if (isDone && !isImportant) {
      return "todo-item__title todo-item__title_done";
    }
    if (!isDone && isImportant) {
      return "todo-item__title todo-item__title_important";
    }
    return "todo-item__title";
  }

  return (
    <li className="todo-item" onClick={handleToggleDone}>
      <p className={renderTitleClassName()}>{title}</p>

      <div className="todo-item__wrapp-btn">
        <button
          type="button"
          className="todo-item__btn"
          disabled={isDone ? true : false}
          onClick={onToggleImportant}
        >
          <img
            src={isImportant ? importantActiveButton : importantButton}
            alt="mark as important."
            className={isDone ? "icon icon_disable" : "icon"}
          />
          {isDone ? null : (
            <div className="todo-item__btn-hint">mark as important</div>
          )}
        </button>

        <button type="button" className="todo-item__btn" onClick={onDeleted}>
          <img src={trashButton} alt="delete task." className="icon" />
          <div className="todo-item__btn-hint">delete</div>
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
