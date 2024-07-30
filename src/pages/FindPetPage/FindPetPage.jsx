
// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import FindPetsCard from '../../components/FindPetsCard/FindPetsCard';
// import '../../styles/FindPetPage.scss';
// import SearchField from '../../components/SearchField/SearchField';
// import Pagination from '../../components/Pagination/Pagination';
// import { fetchAllPetsByQuery, setQuery, setPage } from '../../redux/slices/searchSlice';
// import { setCategoryFilter, setGenderFilter, setTypeFilter, setLocationFilter } from '../../redux/slices/filtersSlice';
// import { filterAndSortPets } from '../../utils/filterAndSortPets';
// import { categories, genders, species } from '../../utils/constants';
// import ModalAttention from '../../components/ModalAttention/ModalAttention';
// import Modal from '../../components/Modal/Modal';

// const FindPetPage = () => {
//   const { locations } = useSelector(state => state.data);
//   const { pets, totalItems, loading, query, currentPage } = useSelector(state => state.search);
//   const { category, gender, type, location } = useSelector(state => state.filters);
//   const { sortBy } = useSelector(state => state.sort);
//   const { user } = useSelector(state => state.user);
//   const dispatch = useDispatch();
//   const itemsPerPage = 6;

//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedPet, setSelectedPet] = useState(null);

//   useEffect(() => {
//     dispatch(fetchAllPetsByQuery({ query }));
//   }, [dispatch, query]);

//   const handleSearch = (searchQuery) => {
//     dispatch(setQuery(searchQuery));
//   };

//   const handleClearSearch = () => {
//     dispatch(setQuery(''));
//   };

//   const handlePageChange = (page) => {
//     dispatch(setPage(page));
//   };

//   const handleCategoryChange = (category) => {
//     dispatch(setCategoryFilter(category));
//   };

//   const handleGenderChange = (gender) => {
//     dispatch(setGenderFilter(gender));
//   };

//   const handleTypeChange = (type) => {
//     dispatch(setTypeFilter(type));
//   };

//   const handleLocationChange = (location) => {
//     dispatch(setLocationFilter(location));
//   };

//   const handlePetClick = (pet) => {
//     setSelectedPet(pet);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedPet(null);
//   };

//   const filteredPets = filterAndSortPets(pets, query, category, gender, type, location, sortBy);
//   const currentPets = filteredPets.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

//   return (
//     <div className='container'>
//       <section className='find_yor_pets'>
//         <h2>Find your favorite pet</h2>
//         <div className='find_pets_container'>
//           <SearchField 
//             categories={categories} 
//             genders={genders} 
//             types={species} 
//             locations={locations} 
//             onSearch={handleSearch}
//             onClear={handleClearSearch}
//             onCategoryChange={handleCategoryChange}
//             onGenderChange={handleGenderChange}
//             onTypeChange={handleTypeChange}
//             onLocationChange={handleLocationChange}
//           />
//         </div>
//         <div className='pets_section'>
//           <FindPetsCard 
//             pets={currentPets} 
//             loading={loading}
//             onPetClick={handlePetClick}
//           />
//         </div>
//         <Pagination
//           totalItems={filteredPets.length}
//           itemsPerPage={itemsPerPage}
//           onPageChange={handlePageChange}
//           currentPage={currentPage}
//         />
//       </section>
//       {user ? (
//         <Modal
//           isOpen={isModalOpen}
//           onClose={closeModal}
//           pet={selectedPet}
//         />
//       ) : (
//         <ModalAttention
//           isOpen={isModalOpen}
//           onClose={closeModal}
//         />
//       )}
//     </div>
//   );
// };

// export default FindPetPage;



import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FindPetsCard from '../../components/FindPetsCard/FindPetsCard';
import '../../styles/FindPetPage.scss';
import SearchField from '../../components/SearchField/SearchField';
import Pagination from '../../components/Pagination/Pagination';
import { fetchAllPetsByQuery, setQuery, setPage } from '../../redux/slices/searchSlice';
import { setCategoryFilter, setGenderFilter, setTypeFilter, setLocationFilter } from '../../redux/slices/filtersSlice';
import { filterAndSortPets } from '../../utils/filterAndSortPets';
import { fetchData } from '../../redux/slices/dataSlice';
import ModalAttention from '../../components/ModalAttention/ModalAttention';
import Modal from '../../components/Modal/Modal';
import AOS from 'aos';
import 'aos/dist/aos.css';

const FindPetPage = () => {
  const { categories, genders, types, locations, loading, error } = useSelector(state => state.data);
  const { pets, totalItems, query, currentPage } = useSelector(state => state.search);
  const { category, gender, type, location } = useSelector(state => state.filters);
  const { sortBy } = useSelector(state => state.sort);
  const { user } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const itemsPerPage = 6;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPet, setSelectedPet] = useState(null);

  useEffect(() => {
    AOS.init();
    dispatch(fetchAllPetsByQuery({ query }));
    dispatch(fetchData()); // Загружаем все необходимые данные
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
    console.log("Selected location: ", location);
    dispatch(setLocationFilter(location));
  };

  const handlePetClick = (pet) => {
    setSelectedPet(pet);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPet(null);
  };

  const filteredPets = filterAndSortPets(pets, query, category, gender, type, location, sortBy);
  const currentPets = filteredPets.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  useEffect(() => {
    console.log("Filtered pets: ", filteredPets);
  }, [filteredPets]);

  return (
    <div className='container'>
      <section className='find_yor_pets'>
        <h2>Find your favorite pet</h2>
        <div className='find_pets_container'>
          <SearchField 
            categories={categories} 
            genders={genders} 
            types={types} 
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
            onPetClick={handlePetClick}
          />
        </div>
        <Pagination
          totalItems={filteredPets.length}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
          currentPage={currentPage}
        />
      </section>
      {user ? (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          pet={selectedPet}
        />
      ) : (
        <ModalAttention
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default FindPetPage;

