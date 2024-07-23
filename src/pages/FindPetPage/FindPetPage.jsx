

// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import FindPetsCard from '../../components/FindPetsCard/FindPetsCard';
// import '../../styles/FindPetPage.scss';
// import SearchField from '../../components/SearchField/SearchField';
// import { fetchData } from '../../redux/slices/dataSlice';
// import Pagination from '../../components/Pagination/Pagination';

// const FindPetPage = () => {
//   const dispatch = useDispatch();
//   const filters = useSelector(state => state.notices.filters);
//   const searchValue = useSelector(state => state.location.searchValue);
//   const { categories, genders, types, locations } = useSelector(state => state.data);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalItems, setTotalItems] = useState(0);
//   const [allPets, setAllPets] = useState([]);
//   const [filteredPets, setFilteredPets] = useState([]);
//   const itemsPerPage = 6; // Количество элементов на странице

//   useEffect(() => {
//     dispatch(fetchData());
//   }, [dispatch]);

//   useEffect(() => {
//     if (Array.isArray(filters)) {
//       setAllPets(filters);
//       setFilteredPets(filters);
//       setTotalItems(filters.length);
//     }
//   }, [filters]);

//   const handleSearch = (query) => {
//     if (Array.isArray(allPets)) {
//       const filtered = allPets.filter(item => 
//         item.title.toLowerCase().includes(query.toLowerCase()) ||
//         item.description.toLowerCase().includes(query.toLowerCase())
//       );
//       setFilteredPets(filtered);
//       setTotalItems(filtered.length);
//       setCurrentPage(1);
//     }
//   };

//   const handleClearSearch = () => {
//     setFilteredPets(allPets);
//     setTotalItems(allPets.length);
//     setCurrentPage(1);
//   };

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentPets = Array.isArray(filteredPets) ? filteredPets.slice(indexOfFirstItem, indexOfLastItem) : [];

//   return (
//     <div className='container'>
//       <section className='find_yor_pets'>
//         <h2>Find your favorite pet</h2>
//         <div className='find_pets_container'>
//           <SearchField 
//             categories={categories} 
//             genders={genders} 
//             types={types} 
//             locations={locations} 
//             onSearch={handleSearch}
//             onClear={handleClearSearch}
//           />
//         </div>
//         <div className='pets_section'>
//           <FindPetsCard 
//             filters={currentPets} 
//             searchValue={searchValue} 
//             currentPage={currentPage}
//             setTotalItems={setTotalItems} 
//           />
//         </div>
//         <Pagination
//           totalItems={totalItems}
//           itemsPerPage={itemsPerPage}
//           onPageChange={handlePageChange}
//           currentPage={currentPage}
//         />
//       </section>
//     </div>
//   );
// };

// export default FindPetPage;



// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import FindPetsCard from '../../components/FindPetsCard/FindPetsCard';
// import '../../styles/FindPetPage.scss';
// import SearchField from '../../components/SearchField/SearchField';
// import Pagination from '../../components/Pagination/Pagination';
// import { fetchPetsByQuery, setQuery, setPage } from '../../redux/slices/searchSlice';

// const FindPetPage = () => {
//   const { categories, genders, types, locations } = useSelector(state => state.data);
//   const { pets, totalItems, loading, query, currentPage } = useSelector(state => state.search);
//   const dispatch = useDispatch();
//   const itemsPerPage = 6;

//   useEffect(() => {
//     dispatch(fetchPetsByQuery({ page: currentPage, query }));
//   }, [dispatch, currentPage, query]);

//   const handleSearch = (searchQuery) => {
//     console.log(`Search query: ${searchQuery}`);
//     dispatch(setQuery(searchQuery));
//     dispatch(fetchPetsByQuery({ page: 1, query: searchQuery }));
//   };

//   const handleClearSearch = () => {
//     console.log('Clear search');
//     dispatch(setQuery(''));
//     dispatch(fetchPetsByQuery({ page: 1, query: '' }));
//   };

//   const handlePageChange = (page) => {
//     console.log(`Page change: ${page}`);
//     dispatch(setPage(page));
//     dispatch(fetchPetsByQuery({ page, query }));
//   };

//   console.log('Current query:', query);
//   console.log('Fetched pets:', pets);
//   console.log('Total items:', totalItems);

//   return (
//     <div className='container'>
//       <section className='find_yor_pets'>
//         <h2>Find your favorite pet</h2>
//         <div className='find_pets_container'>
//           <SearchField 
//             categories={categories} 
//             genders={genders} 
//             types={types} 
//             locations={locations} 
//             onSearch={handleSearch}
//             onClear={handleClearSearch}
//           />
//         </div>
//         <div className='pets_section'>
//           <FindPetsCard 
//             pets={pets} 
//             loading={loading}
//           />
//         </div>
//         <Pagination
//           totalItems={totalItems}
//           itemsPerPage={itemsPerPage}
//           onPageChange={handlePageChange}
//           currentPage={currentPage}
//         />
//       </section>
//     </div>
//   );
// };

// export default FindPetPage;





// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import FindPetsCard from '../../components/FindPetsCard/FindPetsCard';
// import '../../styles/FindPetPage.scss';
// import SearchField from '../../components/SearchField/SearchField';
// import Pagination from '../../components/Pagination/Pagination';
// import { fetchAllPetsByQuery, setQuery, setPage } from '../../redux/slices/searchSlice';

// const FindPetPage = () => {
//   const { categories, genders, types, locations } = useSelector(state => state.data);
//   const { pets, totalItems, loading, query, currentPage } = useSelector(state => state.search);
//   const dispatch = useDispatch();
//   const itemsPerPage = 6;

//   useEffect(() => {
//     dispatch(fetchAllPetsByQuery({ query }));
//   }, [dispatch, query]);

//   const handleSearch = (searchQuery) => {
//     console.log(`Search query: ${searchQuery}`);
//     dispatch(setQuery(searchQuery));
//   };

//   const handleClearSearch = () => {
//     console.log('Clear search');
//     dispatch(setQuery(''));
//   };

//   const handlePageChange = (page) => {
//     console.log(`Page change: ${page}`);
//     dispatch(setPage(page));
//   };

//   console.log('Current query:', query);
//   console.log('Fetched pets:', pets);
//   console.log('Total items:', totalItems);

//   const currentPets = pets.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

//   return (
//     <div className='container'>
//       <section className='find_yor_pets'>
//         <h2>Find your favorite pet</h2>
//         <div className='find_pets_container'>
//           <SearchField 
//             categories={categories} 
//             genders={genders} 
//             types={types} 
//             locations={locations} 
//             onSearch={handleSearch}
//             onClear={handleClearSearch}
//           />
//         </div>
//         <div className='pets_section'>
//           <FindPetsCard 
//             pets={currentPets} 
//             loading={loading}
//           />
//         </div>
//         <Pagination
//           totalItems={totalItems}
//           itemsPerPage={itemsPerPage}
//           onPageChange={handlePageChange}
//           currentPage={currentPage}
//         />
//       </section>
//     </div>
//   );
// };

// export default FindPetPage;



import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FindPetsCard from '../../components/FindPetsCard/FindPetsCard';
import '../../styles/FindPetPage.scss';
import SearchField from '../../components/SearchField/SearchField';
import Pagination from '../../components/Pagination/Pagination';
import { fetchAllPetsByQuery, setQuery, setPage } from '../../redux/slices/searchSlice';

const FindPetPage = () => {
  const { categories, genders, types, locations } = useSelector(state => state.data);
  const { pets, totalItems, loading, query, currentPage } = useSelector(state => state.search);
  const dispatch = useDispatch();
  const itemsPerPage = 6;

  useEffect(() => {
    dispatch(fetchAllPetsByQuery({ query }));
  }, [dispatch, query]);

  const handleSearch = (searchQuery) => {
    console.log(`Search query: ${searchQuery}`);
    dispatch(setQuery(searchQuery));
  };

  const handleClearSearch = () => {
    console.log('Clear search');
    dispatch(setQuery(''));
  };

  const handlePageChange = (page) => {
    console.log(`Page change: ${page}`);
    dispatch(setPage(page));
  };

  console.log('Current query:', query);
  console.log('Fetched pets:', pets);
  console.log('Total items:', totalItems);

  // Фильтрация питомцев по ключевому слову
  const filterPets = (pets, query) => {
    if (!query) return pets;
    const lowerCaseQuery = query.toLowerCase();
    return pets.filter(pet => {
      const { species, title, name, comment, sex, location } = pet;
      const locationString = `${location?.stateEn || ''} ${location?.cityEn || ''}`.toLowerCase();
      return (
        (species && species.toLowerCase().includes(lowerCaseQuery)) ||
        (title && title.toLowerCase().includes(lowerCaseQuery)) ||
        (name && name.toLowerCase().includes(lowerCaseQuery)) ||
        (comment && comment.toLowerCase().includes(lowerCaseQuery)) ||
        (sex && sex.toLowerCase().includes(lowerCaseQuery)) ||
        locationString.includes(lowerCaseQuery)
      );
    });
  };

  const filteredPets = filterPets(pets, query);
  const currentPets = filteredPets.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

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
