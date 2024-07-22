
import React, { useEffect, useState } from 'react';
import '../../styles/NewsCard.scss';
import { Link } from 'react-router-dom';
import { formatDate } from '../../services/data';

const NewsCard = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('https://petlove.b.goit.study/api/news');
        if (!response.ok) {
          throw new Error('Failed to fetch news');
        }
        const data = await response.json();
        setNews(data.results);
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className='news_card'>
      {loading ? (
        // Показать существующие карточки без информации, пока данные загружаются
        Array(4).fill(0).map((_, index) => (
          <div 
            data-aos="fade-up"
            data-aos-delay="300"
            key={index} className='news'>
            <div className='placeholder-img'></div>
            <h3 className='placeholder-title'></h3>
            <p className='placeholder-text'></p>
            <div className="news_details">
              <span className='placeholder-date'></span>
              <span className='placeholder-link'></span>
            </div>
          </div>
        ))
      ) : (
        // Показать загруженные данные
        news.map((item) => (
          <div 
            data-aos="fade-up"
            data-aos-delay="300"
            key={item.id} className='news'>
            <img src={item.imgUrl} alt={item.title} />
            <h3
              data-aos="zoom-out"
              data-aos-duration="500"
              data-ous-once="true"
            >
              {item.title}
            </h3>
            <p>{item.text}</p>
            <div className="news_details">
              <span className='news_date'><p>{formatDate(item.date)}</p></span> 
              <Link to={item.url} className='read_more' target="_blank" rel="noopener noreferrer">Read More</Link>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default NewsCard;
