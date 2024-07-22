
import React, { useState } from 'react';
import ReactSelect from 'react-select';

const TypeSelect = ({ onChange, types }) => {
  const [selectedType, setSelectedType] = useState(null);

  const handleChange = (selectedOption) => {
    setSelectedType(selectedOption);
    onChange(selectedOption ? selectedOption.value : '');
  };

  return (
    <ReactSelect 
      value={selectedType}
      onChange={handleChange}
      options={types ? types.map(type => ({ value: type, label: type })) : []}
      isSearchable
      placeholder="By type"
      isClearable
    />
  );
};

export default TypeSelect;
