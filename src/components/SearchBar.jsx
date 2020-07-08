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
              props.funcLink(`name=${e.target.value}`);
            }}
          />
        </form>
      </nav>
    </div>
  );
}

export default SearchBar;
