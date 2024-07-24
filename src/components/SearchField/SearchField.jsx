
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCategoryFilter, setGenderFilter, setTypeFilter, setLocationFilter } from '../../redux/slices/filtersSlice';
import { setSortBy } from '../../redux/slices/sortSlice';
import CategorySelect from '../UI/CategorySelect/CategorySelect';
import GenderSelect from '../UI/GenderSelect/GenderSelect';
import TypeSelect from '../UI/TypeSelect/TypeSelect';
import LocationInput from '../UI/LocationInput/LocationInput';
import InputSearch from '../UI/InputSearch/InputSearch';
import Button from '../UI/Button/Button';
import '../../styles/Searchfield.scss';

const SearchField = ({ categories, genders, types, locations, onSearch, onClear, onCategoryChange, onGenderChange, onTypeChange, onLocationChange }) => {
  const [activeButton, setActiveButton] = useState('');
  const dispatch = useDispatch();

  const handleCategoryChange = (value) => {
    dispatch(setCategoryFilter(value));
    onCategoryChange(value);
  };

  const handleGenderChange = (value) => {
    dispatch(setGenderFilter(value));
    onGenderChange(value);
  };

  const handleTypeChange = (value) => {
    dispatch(setTypeFilter(value));
    onTypeChange(value);
  };

  const handleLocationChange = (value) => {
    dispatch(setLocationFilter(value));
    onLocationChange(value);
  };

  const handleSortBy = (sortBy) => {
    setActiveButton(sortBy);
    dispatch(setSortBy(sortBy));
  };

  return (
    <div className='search_wrapper'>
      <InputSearch onSearch={onSearch} onClear={onClear} />
      <div className='search_field_form'>
        <CategorySelect onChange={handleCategoryChange} categories={categories} />
        <GenderSelect onChange={handleGenderChange} genders={genders} />
        <TypeSelect onChange={handleTypeChange} types={types} />
        <LocationInput onChange={handleLocationChange} locations={locations} />
      </div>
      <div className="radio_button">
        <Button text="Popular" color="white" isActive={activeButton === 'popularity'} onClick={() => handleSortBy('popularity')} /> 
        <Button text="Unpopular" color="white" isActive={activeButton === 'unpopularity'} onClick={() => handleSortBy('unpopularity')} /> 
        <Button text="Cheap" color="white" isActive={activeButton === 'cheap'} onClick={() => handleSortBy('cheap')} /> 
        <Button text="Expensive" color="white" isActive={activeButton === 'expensive'} onClick={() => handleSortBy('expensive')} /> 
      </div>
    </div>
  );
};

export default SearchField;
