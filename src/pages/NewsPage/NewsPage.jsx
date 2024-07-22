import React from 'react';
import SearchField from '../../components/SearchField/SearchField';
import '../../styles/Newspage.scss';
import NewsCard from '../../components/NewsCard/NewsCard';
import Pagination from '../../components/Pagination/Pagination';

const NewsPage = () => {
  return (
    <section className='news'>
      
      {/* <SearchField/>  */}
      <div className='news_page'> 
        <NewsCard />
        <Pagination/>
      </div>
      
    </section>  
  )
}

export default NewsPage;
