import React, { useState } from 'react';
import ReactSelect from 'react-select';
import ReactSelectStyles from '../../../utils/ReactSelectStyles';

const species = [
  { value: "dog", label: "Dog" },
  { value: "cat", label: "Cat" },
  { value: "monkey", label: "Monkey" },
  { value: "bird", label: "Bird" },
  { value: "snake", label: "Snake" },
  { value: "turtle", label: "Turtle" },
  { value: "lizard", label: "Lizard" },
  { value: "frog", label: "Frog" },
  { value: "fish", label: "Fish" },
  { value: "ants", label: "Ants" },
  { value: "bees", label: "Bees" },
  { value: "butterfly", label: "Butterfly" },
  { value: "spider", label: "Spider" },
  { value: "scorpion", label: "Scorpion" }
];

const TypeSelect = ({ onChange, value, styles,placeholder }) => {
  const [selectedType, setSelectedType] = useState(value ? { value, label: value } : null);

  const handleChange = (selectedOption) => {
    setSelectedType(selectedOption);
    onChange(selectedOption ? selectedOption.value : '');
  };

  return (
    <ReactSelect 
      value={selectedType}
      onChange={handleChange}
      options={species}
      isSearchable
      placeholder={placeholder}
      styles={ReactSelectStyles}
      isClearable
      
    />
  );
};

export default TypeSelect;
