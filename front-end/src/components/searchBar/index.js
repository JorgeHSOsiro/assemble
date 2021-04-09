import React, { useEffect, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import './style.css';

const SearchBar = () => {
  const [title, setTitle] = useState('');
  useEffect(() => {
    setTitle('Search Comics or Characters');
  }, []);
  return (
    <div>
      <h2>{title}</h2>
      <form className="search-form" method="GET">
        <div className="input-container">
          <label htmlFor="searchInput">
            <input type="text" name="searchInput" id="searchInput" />
          </label>
          <div className="radio-content">
            <label htmlFor="comics">
              <input type="radio" name="subject" value="comics" checked />
              Comics
            </label>
            <label htmlFor="characters">
              <input type="radio" name="subject" value="characters" />
              Characters
            </label>
          </div>
        </div>
        <button className="search-btn" type="button">
          <BsSearch className="search-icon" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
