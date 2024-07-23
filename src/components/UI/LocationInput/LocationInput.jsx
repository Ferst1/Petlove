import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InputSearch from '../InputSearch/InputSearch';
import '../../../styles/InputSearch.scss';

const LocationInput = ({ onChange }) => {
  const [locations, setLocations] = useState([]);
  const [filteredLocations, setFilteredLocations] = useState([]);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await axios.get('/api/locations'); // Замените на правильный эндпоинт
        const locationOptions = response.data.map(location => ({
          value: `${location.stateEn} ${location.cityEn} ${location.countyEn}`,
          label: `${location.stateEn}, ${location.cityEn} (${location.countyEn})`
        }));
        setLocations(locationOptions);
        setFilteredLocations(locationOptions);
      } catch (error) {
        console.error('Error fetching locations:', error);
      }
    };
    fetchLocations();
  }, []);

  const handleSearch = (query) => {
    const filtered = locations.filter(location =>
      location.label.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredLocations(filtered);
    onChange(query);
  };

  const handleClear = () => {
    setFilteredLocations(locations);
    onChange('');
  };

  const handleLocationClick = (location) => {
    setFilteredLocations([]);
    onChange(location.value);
  };

  return (
    <div>
      <InputSearch onSearch={handleSearch} onClear={handleClear} />
      {filteredLocations.length > 0 && (
        <ul className="dropdown-menu">
          {filteredLocations.map((location, index) => (
            <li 
              key={index} 
              onClick={() => handleLocationClick(location)}
              className="dropdown-item"
            >
              {location.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LocationInput;
