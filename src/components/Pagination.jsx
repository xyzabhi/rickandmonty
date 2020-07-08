import React from "react";

function Pagination(props) {
  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a
              className="page-link"
              href="#"
              onClick={() => {
                props.func(1);
                props.funcLink("page=1");
              }}
            >
              Previous
            </a>
          </li>
          <li className="page-item">
            <a
              className="page-link"
              href="#"
              onClick={() => {
                props.func(2);
                props.funcLink("page=2");
              }}
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
