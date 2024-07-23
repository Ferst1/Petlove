
import React from 'react';
import { useDispatch } from 'react-redux';
import { setCategoryFilter, setGenderFilter, setTypeFilter, setLocationFilter } from '../../redux/slices/filtersSlice';
import CategorySelect from '../UI/CategorySelect/CategorySelect';
import GenderSelect from '../UI/GenderSelect/GenderSelect';
import TypeSelect from '../UI/TypeSelect/TypeSelect';
import LocationInput from '../UI/LocationInput/LocationInput';
import InputSearch from '../UI/InputSearch/InputSearch';

import '../../styles/Searchfield.scss';
import Button from '../UI/Button/Button';

const SearchField = ({ categories, genders, types, locations, onSearch, onClear, onCategoryChange, onGenderChange, onTypeChange, onLocationChange }) => {
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
        <Button text={"Popular"}/> 
        <Button text={"Unpopular"}/> 
        <Button text={"Cheap"}/> 
        <Button text={"Expensive"}/> 
      </div>
    </div>
  );
};

export default SearchField;
