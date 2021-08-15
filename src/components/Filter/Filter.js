import React from "react";

import "./Filter.css";

function Filter() {
  return (
    <form className="">
      <input
        type="text"
        className="form-control"
        placeholder="Default input"
        id="inputDefault"
      />

      <div
        className="btn-group"
        role="group"
        aria-label="Basic radio toggle button group"
      >
        <input
          type="radio"
          className="btn-check"
          name="btnradio"
          id="btnradio1"
          autoComplete="off"
          defaultChecked="true"
        />
        <label className="btn btn-outline-primary" htmlFor="btnradio1">
          All
        </label>
        <input
          type="radio"
          className="btn-check"
          name="btnradio"
          id="btnradio2"
          autoComplete="off"
          defaultChecked=""
        />
        <label className="btn btn-outline-primary" htmlFor="btnradio2">
          Active
        </label>
        <input
          type="radio"
          className="btn-check"
          name="btnradio"
          id="btnradio3"
          autoComplete="off"
          defaultChecked=""
        />
        <label className="btn btn-outline-primary" htmlFor="btnradio3">
          Done
        </label>
      </div>
    </form>
  );
}

export default Filter;
