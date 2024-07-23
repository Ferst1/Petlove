
import React from 'react';
import { useDispatch } from 'react-redux';
import { setCategoryFilter, setGenderFilter, setTypeFilter, setLocationFilter } from '../../redux/slices/filtersSlice';
import CategorySelect from '../UI/CategorySelect/CategorySelect';
import GenderSelect from '../UI/GenderSelect/GenderSelect';
import TypeSelect from '../UI/TypeSelect/TypeSelect';
import LocationInput from '../UI/LocationInput/LocationInput';
import InputSearch from '../UI/InputSearch/InputSearch';

import '../../styles/Searchfield.scss';

const SearchField = ({ categories, genders, types, locations }) => {
  const dispatch = useDispatch(); 

  const handleCategoryChange = (value) => {
    dispatch(setCategoryFilter(value));
  };

  const handleGenderChange = (value) => {
    dispatch(setGenderFilter(value));
  };

  const handleTypeChange = (value) => {
    dispatch(setTypeFilter(value));
  };

  const handleLocationChange = (value) => {
    dispatch(setLocationFilter(value));
  };

  return (
    <div className='search_wrapper'>
      <form className='search_field_form'>
        <InputSearch/>  
        <CategorySelect onChange={handleCategoryChange} categories={categories} />
        <GenderSelect onChange={handleGenderChange} genders={genders} />
        <TypeSelect onChange={handleTypeChange} types={types} />
        <LocationInput onChange={handleLocationChange} locations={locations} />
      </form>
    </div>
  );
};

export default SearchField;
