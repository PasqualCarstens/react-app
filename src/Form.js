import React from "react";

export default function Form() {
  return (
    <div className="Form">
      <form id="search-form" className="mb-3">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city"
              className="form-control"
              id="city-input"
              autocomplete="off"
            />
          </div>
          <div class="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-outline-dark w-100"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
