import React, { useEffect, useState } from "react";

import "./AddSection.css";
import todoAddIcon from "../../images/svg/task_add_24dp.svg";

function AddSection({ onAddItem, countTotal }) {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const [isButtonEnable, setIsButtonEnable] = useState(false);

  const regexpWords = /[a-zA-Z]{3,}/gim;
  const regexpSpaces = /[\s]{2,}/gim;

  useEffect(() => {
    if (inputValue.length >= 1) {
      setIsButtonEnable(true);
    } else {
      setIsButtonEnable(false);
    }

    if (inputValue.length >= 100) {
      setError("");
    }
  }, [inputValue]);

  function handleChangeAddInput(e) {
    setInputValue(e.target.value);
  }

  function handleSubmitAddForm(e) {
    e.preventDefault();

    if (countTotal === 20) {
      return setError("You can create only 20 Todos!");
    }
    if (regexpWords.test(inputValue)) {
      onAddItem(inputValue.replace(regexpSpaces, " ").trim());

      setError("");
      e.target.reset();
      return setInputValue("");
    } else {
      return setError("Enter the correct Todo!");
    }
  }

  return (
    <section>
      <p className="add-section__err-title">{error}</p>

      <form className="add-section__form" onSubmit={handleSubmitAddForm}>
        <input
          type="text"
          className="add-section__input"
          placeholder="Add Todo"
          autoComplete="off"
          onChange={handleChangeAddInput}
        />

        {isButtonEnable ? (
          <button type="submit" className="todo-item__btn">
            <img
              src={todoAddIcon}
              alt="add todo."
              className="icon icon_add-section"
            />
            <div className="todo-item__btn-hint">add Todo</div>
          </button>
        ) : (
          <button type="submit" disabled className="todo-item__btn">
            <img
              src={todoAddIcon}
              alt="add todo."
              className="icon icon_add-section icon_disable"
            />
          </button>
        )}
      </form>
    </section>
  );
}

export default AddSection;
