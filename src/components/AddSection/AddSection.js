import React, { useEffect, useState } from "react";

import "./AddSection.css";
import todoAddIcon from "../../images/svg/task_add_24dp.svg";

function AddSection({ onAddItem, countTotal }) {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const [isButtonEnable, setIsButtonEnable] = useState(false);

  const regexpWords = /[^\s\d!@#$%^&*()_\-+.,~`"'{}[\]№;:?|\\\/]{3,}/gim; // eslint-disable-line no-useless-escape
  const regexpSpaces = /[\s]{2,}/gim;

  const errText1 = "Enter the correct Todo!";
  const errText2 = "You can create only 20 Todos!";
  const errText3 = "Maximum 100 characters!";

  useEffect(() => {
    if (inputValue.length >= 1) {
      setIsButtonEnable(true);
    } else {
      setIsButtonEnable(false);
    }

    if (inputValue.length === 100) {
      setError(errText3);
    } else if (inputValue.length === 99 && error === errText3) {
      setError("");
    }

    if (inputValue.length === 0) {
      return setError("");
    }
  }, [inputValue, error]);

  function handleChangeAddInput(e) {
    setInputValue(e.target.value);
  }

  function handleSubmitAddForm(e) {
    e.preventDefault();

    if (countTotal === 20) {
      return setError(errText2);
    }
    if (regexpWords.test(inputValue)) {
      onAddItem(inputValue.replace(regexpSpaces, " ").trim());

      setError("");
      e.target.reset();
      return setInputValue("");
    } else {
      return setError(errText1);
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
          maxLength={100}
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
