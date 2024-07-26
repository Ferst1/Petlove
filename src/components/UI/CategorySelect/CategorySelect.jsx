
import React, { useState } from 'react';
import ReactSelect from 'react-select';
import ReactSelectStyles from '../../../utils/ReactSelectStyles';


const categories = [
  "found",
  "free",
  "lost",
  "sell"
];

const CategorySelect = ({ onChange }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleChange = (selectedOption) => {
    setSelectedCategory(selectedOption);
    onChange(selectedOption ? selectedOption.value : '');
  };

  return (
    <ReactSelect 
      value={selectedCategory}
      onChange={handleChange}
      options={categories.map(category => ({ value: category, label: category }))}
      isSearchable
      placeholder="Category"
      isClearable
      styles={ReactSelectStyles}
    />
  );
};

export default CategorySelect;
