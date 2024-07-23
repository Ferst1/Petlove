

import React, { useState, useEffect } from 'react';
import '../../styles/Newspage.scss';
import NewsCard from '../../components/NewsCard/NewsCard';
import Pagination from '../../components/Pagination/Pagination';
import InputSearch from '../../components/UI/InputSearch/InputSearch';

const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [filteredNews, setFilteredNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const itemsPerPage = 6; // Количество элементов на странице

  useEffect(() => {
    fetchNews(currentPage);
  }, [currentPage]);

  const fetchNews = async (page) => {
    setLoading(true);
    try {
      const response = await fetch(`https://petlove.b.goit.study/api/news?page=${page}&limit=${itemsPerPage}`);
      if (!response.ok) {
        throw new Error('Failed to fetch news');
      }
      const data = await response.json();
      setNews(data.results);
      setFilteredNews(data.results);
      setTotalItems(data.total); // Общее количество элементов на сервере
    } catch (error) {
      console.error('Error fetching news:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (query) => {
    const filtered = news.filter(item => 
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.text.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredNews(filtered);
    setTotalItems(filtered.length);
    setCurrentPage(1); 
  };

  const handleClearSearch = () => {
    setFilteredNews(news);
    setTotalItems(news.length);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container">
      <section className='news'>
        <div className="news_search_wrapper">
          <h2>News</h2>
          <InputSearch onSearch={handleSearch} onClear={handleClearSearch} />
        </div>
        <div className='news_page'> 
          <NewsCard news={filteredNews} loading={loading} />
          <Pagination 
            totalItems={totalItems} 
            itemsPerPage={itemsPerPage} 
            onPageChange={handlePageChange} 
            currentPage={currentPage}
          />
        </div>
      </section>  
    </div>
  );
}

export default NewsPage;
