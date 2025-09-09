import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const search = () => {
  if (searchTerm.trim()) {
    console.log("Searching for:", searchTerm);
    onSearch(searchTerm);
  }
};

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      search();
      event.preventDefault(); // Stop form submission on Enter
    }
  };

  return (
    <div className="SearchBar">
      <input 
        placeholder="Enter A Song, Album, or Artist" 
        value={searchTerm}
        onChange={handleTermChange}
        onKeyDown={handleKeyDown}
      />
      <button onClick={search}>SEARCH</button>
    </div>
  );
}

export default SearchBar;
