import React, { useEffect, useState } from "react";

import "./Filter.css";

import buttonDone from "../../images/svg/task_alt_white_24dp.svg";
import buttonDoneActive from "../../images/svg/task_alt_orange_24dp.svg";
import buttonAll from "../../images/svg/clear_all_white_24dp.svg";
import buttonAllActive from "../../images/svg/clear_all_orange_24dp.svg";
import buttonActive from "../../images/svg/check_white_24dp.svg";
import buttonActiveActive from "../../images/svg/check_orange_24dp.svg";
import filterResetBtn from "../../images/svg/reset_filter_24dp.svg";

function Filter({ setFilter }) {
  const [inputFilterValue, setInputFilterValue] = useState("");
  const [isResetBtnEnable, setIsResetBtnEnable] = useState(false);

  // const regexpTrimSpaces = /^[\s]+|[\s]+$/gim;
  const regexpDoubleSpaces = /[\s]{2,}/gim;
  const regexpSpaces = /^[\s]+|[\s]+$|[\s]{2,}/gim;

  useEffect(() => {
    if (inputFilterValue) {
      setIsResetBtnEnable(true);

      setFilter((prevState) => ({
        ...prevState,
        filterText: inputFilterValue
          .replace(regexpDoubleSpaces, " ")
          .trim()
          .toLowerCase(),
      }));
    } else {
      setIsResetBtnEnable(false);

      setFilter((prevState) => ({ ...prevState, filterText: "" }));
    }
  }, [inputFilterValue, setFilter]);

  function handleSubmitForm(e) {
    e.preventDefault();
  }

  function handleChangeInputFilter(e) {
    // if (e.target.value.test(regexpTrimSpaces)) {
    //   return setInputFilterValue(e.target.value.trim());
    // }
    // setInputFilterValue(e.target.value.replace(regexpSpaces, " "));
    setInputFilterValue(e.target.value);
  }

  function handleResetFilter() {
    setInputFilterValue("");
    setFilter((prevState) => ({ ...prevState, filterText: "" }));
  }

  return (
    <form className="filter-form" onSubmit={handleSubmitForm}>
      <div className="filter-form__filter-wrapp">
        <input
          type="text"
          className="filter-form__input"
          placeholder="Search Todos"
          autoComplete="off"
          maxLength={100}
          onChange={handleChangeInputFilter}
          value={inputFilterValue}
        />

        {isResetBtnEnable ? (
          <button
            type="button"
            className="todo-item__btn"
            onClick={handleResetFilter}
          >
            <img
              src={filterResetBtn}
              alt="reset filter."
              className="icon icon_add-section"
            />
            <p className="todo-item__btn-hint">reset filter</p>
          </button>
        ) : (
          <button type="button" className="todo-item__btn" disabled>
            <img
              src={filterResetBtn}
              alt="reset filter."
              className="icon icon_add-section icon_disable"
            />
          </button>
        )}
      </div>

      <ul
        className="filter-form__radio-ul"
        role="group"
        aria-label="Basic radio toggle button group"
      >
        <li className="filter-form__radio-li">
          <label className="filter-form__radio-label" htmlFor="btn-radio-all">
            <input
              type="radio"
              className="filter-form__radio"
              name="btnradio"
              id="btn-radio-all"
              autoComplete="off"
              defaultChecked="true"
            />
            <img
              src={buttonAll}
              alt="all todos."
              className="filter-form__icon"
            />
            <div className="filter-form__title">All Todos</div>
          </label>
        </li>
        <li className="filter-form__radio-li">
          <label
            className="filter-form__radio-label"
            htmlFor="btn-radio-active"
          >
            <input
              type="radio"
              className="filter-form__radio"
              name="btnradio"
              id="btn-radio-active"
              autoComplete="off"
            />
            <img
              src={buttonActive}
              alt="active todos."
              className="filter-form__icon"
            />
            <div className="filter-form__title">Active</div>
          </label>
        </li>
        <li className="filter-form__radio-li">
          <label className="filter-form__radio-label" htmlFor="btn-radio-done">
            <input
              type="radio"
              className="filter-form__radio"
              name="btnradio"
              id="btn-radio-done"
              autoComplete="off"
            />
            <img
              src={buttonDone}
              alt="done todos."
              className="filter-form__icon"
            />
            <div className="filter-form__title">Done</div>
          </label>
        </li>
      </ul>
    </form>
  );
}

export default Filter;
