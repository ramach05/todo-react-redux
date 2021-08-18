import React from "react";

import "./Filter.css";

function Filter() {
  return (
    <form className="filter-form">
      <input
        type="text"
        className="filter-form__input"
        placeholder="Default input"
        id="inputDefault"
      />

      <ul
        className="filter-form__radio-wrapp"
        role="group"
        aria-label="Basic radio toggle button group"
      >
        <li>
          <input
            type="radio"
            className="filter-form__radio"
            name="btnradio"
            id="btnradio1"
            autoComplete="off"
            defaultChecked="true"
          />
          <label className="filter-form__radio-label" htmlFor="btnradio1">
            All
          </label>
        </li>
        <li>
          <input
            type="radio"
            className="filter-form__radio"
            name="btnradio"
            id="btnradio2"
            autoComplete="off"
            defaultChecked=""
          />
          <label className="filter-form__radio-label" htmlFor="btnradio2">
            Active
          </label>
        </li>
        <li>
          <input
            type="radio"
            className="filter-form__radio"
            name="btnradio"
            id="btnradio3"
            autoComplete="off"
            defaultChecked=""
          />
          <label className="filter-form__radio-label" htmlFor="btnradio3">
            Done
          </label>
        </li>
      </ul>
    </form>
  );
}

export default Filter;
