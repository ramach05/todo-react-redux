import React, { useEffect, useState } from "react";

import "./AddSection.css";
import todoAddIcon from "../../images/svg/task_add_24dp.svg";
import {
  errTextCorrectTodo,
  errTextMaxCharacters,
  errTextMaxTodos,
} from "../../utils/utils";

function AddSection({ onAddItem, countTotal }) {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const [isButtonEnable, setIsButtonEnable] = useState(false);

  const regexpWords = /[^\s\d!@#$%^&*()_\-+.,~`"'{}[\]№;:?|\\\/]{3,}/gim; // eslint-disable-line no-useless-escape
  const regexpSpaces = /[\s]{2,}/gim;

  useEffect(() => {
    if (inputValue.length >= 1) {
      setIsButtonEnable(true);
    } else {
      setIsButtonEnable(false);
    }

    if (inputValue.length === 100) {
      return setError(errTextMaxCharacters);
    }
    if (inputValue.length === 99 && error === errTextMaxCharacters) {
      return setError("");
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
      return setError(errTextMaxTodos);
    }
    if (regexpWords.test(inputValue)) {
      const titleRegexSpaces = inputValue.replace(regexpSpaces, " ").trim();
      const resTitle =
        titleRegexSpaces[0].toUpperCase() + titleRegexSpaces.slice(1);

      onAddItem(resTitle);

      setInputValue("");
      return setError("");
    }
    return setError(errTextCorrectTodo);
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
          value={inputValue}
        />

        {isButtonEnable ? (
          <button type="submit" className="todo-item__btn">
            <img
              src={todoAddIcon}
              alt="add todo."
              className="icon icon_add-section"
            />
            <p className="todo-item__btn-hint">add Todo</p>
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
