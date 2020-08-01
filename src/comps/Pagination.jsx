import React from "react";

export const Pagination = ({ imagePerPage, totalImages, paginate }) => {
  const pageNumbers = [];
  for (let index = 1; index <= Math.ceil(totalImages / imagePerPage); index++) {
    pageNumbers.push(index);
  }
  return (
    <nav className="page">
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} href="!#" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
