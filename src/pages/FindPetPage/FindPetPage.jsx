
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FindPetsCard from '../../components/FindPetsCard/FindPetsCard';
import '../../styles/FindPetPage.scss';
import SearchField from '../../components/SearchField/SearchField';
import Pagination from '../../components/Pagination/Pagination';
import { fetchAllPetsByQuery, setQuery, setPage } from '../../redux/slices/searchSlice';
import { setCategoryFilter, setGenderFilter, setTypeFilter, setLocationFilter } from '../../redux/slices/filtersSlice';

const categories = [
  "found",
  "free",
  "lost",
  "sell"
];

const genders = [
  "female",
  "male",
  "multiple",
  "unknown"
];

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

const FindPetPage = () => {
  const { locations } = useSelector(state => state.data);
  const { pets, totalItems, loading, query, currentPage } = useSelector(state => state.search);
  const { category, gender, type, location } = useSelector(state => state.filters);
  const dispatch = useDispatch();
  const itemsPerPage = 6;

  useEffect(() => {
    dispatch(fetchAllPetsByQuery({ query }));
  }, [dispatch, query]);

  const handleSearch = (searchQuery) => {
    dispatch(setQuery(searchQuery));
  };

  const handleClearSearch = () => {
    dispatch(setQuery(''));
  };

  const handlePageChange = (page) => {
    dispatch(setPage(page));
  };

  const handleCategoryChange = (category) => {
    dispatch(setCategoryFilter(category));
  };

  const handleGenderChange = (gender) => {
    dispatch(setGenderFilter(gender));
  };

  const handleTypeChange = (type) => {
    dispatch(setTypeFilter(type));
  };

  const handleLocationChange = (location) => {
    dispatch(setLocationFilter(location));
  };

  const filterPets = (pets, query, category, gender, type, location) => {
    let filteredPets = pets;
    const lowerCaseQuery = query.toLowerCase();
    if (query) {
      filteredPets = filteredPets.filter(pet => {
        const { species, title, name, comment, sex, location: petLocation } = pet;
        const locationString = `${petLocation?.stateEn || ''} ${petLocation?.cityEn || ''}`.toLowerCase();
        return (
          (species && species.toLowerCase().includes(lowerCaseQuery)) ||
          (title && title.toLowerCase().includes(lowerCaseQuery)) ||
          (name && name.toLowerCase().includes(lowerCaseQuery)) ||
          (comment && comment.toLowerCase().includes(lowerCaseQuery)) ||
          (sex && sex.toLowerCase().includes(lowerCaseQuery)) ||
          locationString.includes(lowerCaseQuery)
        );
      });
    }
    if (category) {
      filteredPets = filteredPets.filter(pet => pet.category === category);
    }
    if (gender) {
      filteredPets = filteredPets.filter(pet => pet.sex === gender);
    }
    if (type) {
      filteredPets = filteredPets.filter(pet => pet.species === type);
    }
    if (location) {
      filteredPets = filteredPets.filter(pet => `${pet.location.stateEn} ${pet.location.cityEn}`.toLowerCase().includes(location.toLowerCase()));
    }
    return filteredPets;
  };

  const filteredPets = filterPets(pets, query, category, gender, type, location);
  const currentPets = filteredPets.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className='container'>
      <section className='find_yor_pets'>
        <h2>Find your favorite pet</h2>
        <div className='find_pets_container'>
          <SearchField 
            categories={categories} 
            genders={genders} 
            types={species} 
            locations={locations} 
            onSearch={handleSearch}
            onClear={handleClearSearch}
            onCategoryChange={handleCategoryChange}
            onGenderChange={handleGenderChange}
            onTypeChange={handleTypeChange}
            onLocationChange={handleLocationChange}
          />
        </div>
        <div className='pets_section'>
          <FindPetsCard 
            pets={currentPets} 
            loading={loading}
          />
        </div>
        <Pagination
          totalItems={filteredPets.length}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
          currentPage={currentPage}
        />
      </section>
    </div>
  );
};

export default FindPetPage;
