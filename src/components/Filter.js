import React, { useState } from 'react';

const Filter = ({ setFilterField, setFilterValue }) => {
  const [field, setField] = useState('');
  const [value, setValue] = useState('');

  const handleFilter = () => {
    setFilterField(field);
    setFilterValue(value);
  };

  return (
    <div>
      <select value={field} onChange={(e) => setField(e.target.value)}>
        <option value="">Select Field</option>
        <option value="email">Email</option>
        <option value="mobile_number">Mobile Number</option>
      </select>
      <input 
        type="text"
        placeholder="Enter value"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleFilter}>Filter</button>
    </div>
  );
};

export default Filter;
