


import React, { useState } from 'react';
import ReactSelect from 'react-select';

const CategorySelect = ({ onChange, categories }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleChange = (selectedOption) => {
    setSelectedCategory(selectedOption);
    onChange(selectedOption ? selectedOption.value : '');
  };

  return (
    <ReactSelect 
      value={selectedCategory}
      onChange={handleChange}
      options={categories ? categories.map(category => ({ value: category, label: category })) : []}
      isSearchable
      placeholder="Category"
      isClearable
    />
  );
};

export default CategorySelect;
