import React, { useState } from 'react';
import ReactSelect from 'react-select';

const genders = [
  "female",
  "male",
  "multiple",
  "unknown"
];

const GenderSelect = ({ onChange }) => {
  const [selectedGender, setSelectedGender] = useState(null);

  const handleChange = (selectedOption) => {
    setSelectedGender(selectedOption);
    onChange(selectedOption ? selectedOption.value : '');
  };

  return (
    <ReactSelect 
      value={selectedGender}
      onChange={handleChange}
      options={genders.map(gender => ({ value: gender, label: gender }))}
      isSearchable
      placeholder="By gender"
      isClearable
    />
  );
};

export default GenderSelect;
