import React from "react";

function SearchBar(props) {
  return (
    <div>
      <nav class="navbar navbar-light bg-light">
        <form class="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={(e) => {
              props.funcSearch(e.target.value);
              props.funcLink(`name=${e.target.value}`);
            }}
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </nav>
    </div>
  );
}

export default SearchBar;
