import React, { useState } from 'react';
import ReactSelect from 'react-select';

const species = [
  "dog",
  "cat",
  "monkey",
  "bird",
  "snake",
  "turtle",
  "lizard",
  "frog",
  "fish",
  "ants",
  "bees",
  "butterfly",
  "spider",
  "scorpion"
];

const TypeSelect = ({ onChange }) => {
  const [selectedType, setSelectedType] = useState(null);

  const handleChange = (selectedOption) => {
    setSelectedType(selectedOption);
    onChange(selectedOption ? selectedOption.value : '');
  };

  return (
    <ReactSelect 
      value={selectedType}
      onChange={handleChange}
      options={species.map(type => ({ value: type, label: type }))}
      isSearchable
      placeholder="By type"
      isClearable
    />
  );
};

export default TypeSelect;
