import React, { useState } from 'react';

const SearchBar = ({ setSearchTerm }) => {
  const [term, setTerm] = useState('');

  const handleSearch = (e) => {
    setTerm(e.target.value);
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <input 
        type="text"
        placeholder="Search by name or email"
        value={term}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
