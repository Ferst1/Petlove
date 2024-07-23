
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FindPetsCard from '../../components/FindPetsCard/FindPetsCard';
import '../../styles/FindPetPage.scss';
import SearchField from '../../components/SearchField/SearchField';
import { fetchData } from '../../redux/slices/dataSlice';
import Pagination from '../../components/Pagination/Pagination';

const FindPetPage = () => {
  const dispatch = useDispatch();
  const filters = useSelector(state => state.notices.filters);
  const searchValue = useSelector(state => state.location.searchValue);
  const { categories, genders, types, locations } = useSelector(state => state.data);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
<div className='container'>
   
    <section className='find_yor_pets'>
      
    <h2>Find your favorite pet</h2>
      
        <div className='find_pets_container'>
          <SearchField categories={categories} genders={genders} types={types} locations={locations} />
        </div>
          
          
          <div className='pets_section'>
            <FindPetsCard 
              filters={filters} 
              searchValue={searchValue} 
              currentPage={currentPage}
              setTotalItems={setTotalItems} 
            />
          </div>
          
       
      
      <Pagination
        totalItems={totalItems}
        itemsPerPage={6}
        onPageChange={handlePageChange}
      />
    </section>
    </div>
  );
};

export default FindPetPage;
