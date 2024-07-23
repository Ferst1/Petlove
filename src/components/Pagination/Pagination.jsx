
import React, { useState, useEffect } from 'react';
import '../../styles/Pagination.scss';

const Pagination = ({ totalItems, itemsPerPage, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1); 
  }, [totalItems]);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages || page === currentPage) {
      return;
    }
    setCurrentPage(page);
    onPageChange(page);
  };

  if (totalPages <= 1) return null; 

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 3;

    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(
          <span
            key={i}
            className={i === currentPage ? 'page active' : 'page'}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </span>
        );
      }
    } else {
      if (currentPage <= 2) {
        for (let i = 1; i <= maxPagesToShow; i++) {
          pageNumbers.push(
            <span
              key={i}
              className={i === currentPage ? 'page active' : 'page'}
              onClick={() => handlePageChange(i)}
            >
              {i}
            </span>
          );
        }
        pageNumbers.push(<span key="dots1">...</span>);
      } else if (currentPage >= totalPages - 1) {
        pageNumbers.push(<span key="dots1">...</span>);
        for (let i = totalPages - (maxPagesToShow - 1); i <= totalPages; i++) {
          pageNumbers.push(
            <span
              key={i}
              className={i === currentPage ? 'page active' : 'page'}
              onClick={() => handlePageChange(i)}
            >
              {i}
            </span>
          );
        }
      } else {
        pageNumbers.push(<span key="dots1">...</span>);
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pageNumbers.push(
            <span
              key={i}
              className={i === currentPage ? 'page active' : 'page'}
              onClick={() => handlePageChange(i)}
            >
              {i}
            </span>
          );
        }
        pageNumbers.push(<span key="dots2">...</span>);
      }
    }

    return pageNumbers;
  };

  return (
    <div className="pagination">
      <span
        className={`arrow ${currentPage === 1 ? 'disabled' : ''}`}
        onClick={() => handlePageChange(1)}
      >
        {"<<"}
      </span>
      <span
        className={`arrow ${currentPage === 1 ? 'disabled' : ''}`}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        {"<"}
      </span>
      {renderPageNumbers()}
      <span
        className={`arrow ${currentPage === totalPages ? 'disabled' : ''}`}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        {">"}
      </span>
      <span
        className={`arrow ${currentPage === totalPages ? 'disabled' : ''}`}
        onClick={() => handlePageChange(totalPages)}
      >
        {">>"}
      </span>
    </div>
  );
};

export default Pagination;
