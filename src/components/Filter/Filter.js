import React, { useEffect, useState } from "react";

import "./Filter.css";

import buttonDone from "../../images/svg/task_alt_white_24dp.svg";
import buttonAll from "../../images/svg/clear_all_white_24dp.svg";
import buttonActive from "../../images/svg/check_white_24dp.svg";
import filterResetBtn from "../../images/svg/reset_filter_24dp.svg";
import {
  activeRadioBtnName,
  allRadioBtnName,
  doneRadioBtnName,
} from "../../utils/utils";

function Filter({ setFilter }) {
  const [inputFilterValue, setInputFilterValue] = useState("");
  const [isResetBtnEnable, setIsResetBtnEnable] = useState(false);

  // const regexpTrimSpaces = /^[\s]+|[\s]+$/gim;
  // const regexpSpaces = /^[\s]+|[\s]+$|[\s]{2,}/gim;

  useEffect(() => {
    if (inputFilterValue) {
      const regexpDoubleSpaces = /[\s]{2,}/gim;
      setIsResetBtnEnable(true);

      return setFilter((prevState) => ({
        ...prevState,
        filterText: inputFilterValue
          .replace(regexpDoubleSpaces, " ")
          .trim()
          .toLowerCase(),
      }));
    }

    setIsResetBtnEnable(false);
    return setFilter((prevState) => ({ ...prevState, filterText: "" }));
  }, [inputFilterValue, setFilter]);

  function handleSubmitForm(e) {
    e.preventDefault();
  }

  function handleChangeInputFilter(e) {
    setInputFilterValue(e.target.value);
  }

  function handleResetFilter() {
    setInputFilterValue("");
    setFilter((prevState) => ({ ...prevState, filterText: "" }));
  }

  function handleClickBtnRadio(e) {
    const { id } = e.target;

    if (id === `btn-radio-${allRadioBtnName}`) {
      setFilter((prevState) => ({
        ...prevState,
        filteredRadioValue: "",
      }));
    }
    if (id === `btn-radio-${activeRadioBtnName}`) {
      setFilter((prevState) => ({
        ...prevState,
        filteredRadioValue: activeRadioBtnName,
      }));
    }
    if (id === `btn-radio-${doneRadioBtnName}`) {
      setFilter((prevState) => ({
        ...prevState,
        filteredRadioValue: doneRadioBtnName,
      }));
    }
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
          <label
            className="filter-form__radio-label"
            htmlFor={`btn-radio-${allRadioBtnName}`}
          >
            <input
              type="radio"
              className="filter-form__radio"
              name="btnradio"
              id={`btn-radio-${allRadioBtnName}`}
              autoComplete="off"
              defaultChecked="true"
              onClick={handleClickBtnRadio}
            />
            <img
              src={buttonAll}
              alt="all todos btn."
              className="filter-form__icon"
            />
            <div className="filter-form__title">All Todos</div>
          </label>
        </li>

        <li className="filter-form__radio-li">
          <label
            className="filter-form__radio-label"
            htmlFor={`btn-radio-${activeRadioBtnName}`}
          >
            <input
              type="radio"
              className="filter-form__radio"
              name="btnradio"
              id={`btn-radio-${activeRadioBtnName}`}
              autoComplete="off"
              onClick={handleClickBtnRadio}
            />

            <img
              src={buttonActive}
              alt="active todos btn."
              className="filter-form__icon"
            />
            <div className="filter-form__title">Active</div>
          </label>
        </li>

        <li className="filter-form__radio-li">
          <label
            className="filter-form__radio-label"
            htmlFor={`btn-radio-${doneRadioBtnName}`}
          >
            <input
              type="radio"
              className="filter-form__radio"
              name="btnradio"
              id={`btn-radio-${doneRadioBtnName}`}
              autoComplete="off"
              onClick={handleClickBtnRadio}
            />
            <img
              src={buttonDone}
              alt="done todos btn."
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
