import React, { useState } from "react";

import "./AddSection.css";
import todoAddIcon from "../../images/svg/task_add_24dp.svg";

function AddSection({ onAddItem }) {
  const [inputValue, setInputValue] = useState("");

  function handleChangeAddInput(e) {
    setInputValue(e.target.value);
  }

  function handleSubmitAddForm(e) {
    e.preventDefault();
    setInputValue("");
    e.target.reset();

    onAddItem(inputValue);
  }

  return (
    <section>
      <form className="add-section__form" onSubmit={handleSubmitAddForm}>
        <input
          type="text"
          className="add-section__input"
          placeholder="Add Todo"
          autoComplete="off"
          onChange={handleChangeAddInput}
        />

        <button type="submit" className="todo-item__btn">
          <img
            src={todoAddIcon}
            alt="add todo."
            className="add-section__icon"
          />
          <div className="todo-item__btn-hint">add Todo</div>
        </button>
      </form>
    </section>
  );
}

export default AddSection;
