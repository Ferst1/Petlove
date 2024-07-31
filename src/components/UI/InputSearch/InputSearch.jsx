
import React, { useState } from 'react';
import { IoSearch, IoClose } from "react-icons/io5";
import '../../../styles/InputSearch.scss';

const InputSearch = ({ onSearch, onClear }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    onSearch(newQuery);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  const handleClear = () => {
    setQuery('');
    onClear();
  };

  return (
    <form onSubmit={handleSearch} className="input-search-form">
      <div className="input-search-container">
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={handleInputChange}
          className="input-search"
        />
        <button 
          type="submit"
          className="input-search-icon"
        >
          <IoSearch size={24} />
        </button>
        {query && (
          <button 
            type="button"
            onClick={handleClear}
            className="input-clear-button"
          >
            <IoClose size={24} />
          </button>
        )}
      </div>
    </form>
  );
};

export default InputSearch;
