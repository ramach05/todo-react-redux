import React from "react";

import "./Filter.css";

import buttonDone from "../../images/svg/task_alt_white_24dp.svg";
import buttonDoneActive from "../../images/svg/task_alt_orange_24dp.svg";
import buttonAll from "../../images/svg/clear_all_white_24dp.svg";
import buttonAllActive from "../../images/svg/clear_all_orange_24dp.svg";
import buttonActive from "../../images/svg/check_white_24dp.svg";
import buttonActiveActive from "../../images/svg/check_orange_24dp.svg";

function Filter() {
  function handleSubmitForm(e) {
    e.preventDefault();
  }

  return (
    <form className="filter-form" onSubmit={handleSubmitForm}>
      <input
        type="text"
        className="filter-form__input"
        placeholder="Search Todos"
        autoComplete="off"
        maxLength={100}
      />

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
