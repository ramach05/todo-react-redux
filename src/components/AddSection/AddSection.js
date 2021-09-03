import React from "react";

import todoAddIcon from "../../images/svg/task_add_24dp.svg";

function AddSection({ onAddItem }) {
  return (
    <section>
      <button
        type="button"
        className="todo-item__btn"
        onClick={() => onAddItem("        hello      world")}
      >
        <img src={todoAddIcon} alt="add todo." className="todo-item__icon" />
        <div className="todo-item__btn-hint">add Todo</div>
      </button>
    </section>
  );
}

export default AddSection;
