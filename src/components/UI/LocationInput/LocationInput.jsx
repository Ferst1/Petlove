import React, { useState } from 'react';
import ReactSelect from 'react-select';

const LocationInput = ({ onChange, locations }) => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleChange = (selectedOption) => {
    setSelectedLocation(selectedOption);
    onChange(selectedOption ? selectedOption.value : '');
  };

  return (
    <ReactSelect 
      value={selectedLocation}
      onChange={handleChange}
      options={locations ? locations.map(location => ({ value: location, label: location })) : []}
      isSearchable
      placeholder="By location"
      isClearable
    />
  );
};

export default LocationInput;
