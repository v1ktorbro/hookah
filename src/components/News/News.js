import { useEffect, useState } from 'react';
import './News.css';
import NewsCard from '../NewsCard/NewsCard';
import NavSwitchesCards from '../NavSwitchesCards/NavSwitchesCards';
import {arrWithNewsCompany} from '../../utils/arrWithNewsCompany';

function News() {
  const [arrWithNews, setArrWithNews] = useState(arrWithNewsCompany);
  const [cardsNewsPeace, setCardsNewsPeace] = useState([]);
  function prevImage(evt) {
    evt.preventDefault();
    console.log('prev');
  }

  function nextImage(evt) {
    evt.preventDefault();
    console.log('next');
  }

  useEffect(() => {
    setCardsNewsPeace(arrWithNews.slice(0, 3))
  }, [])

  return (
    <section className="news">
    <div className="news__nav-wrapper">
      <h1 className="news__title">Новости</h1>
      <NavSwitchesCards
        btnPrev={prevImage}
        btnNext={nextImage}
      />
    </div>
      <div className="news__cards">
      {cardsNewsPeace.map((cardNews, index) => {
        return (
          <NewsCard 
            dataCard={cardNews} 
            key={index}
          /> 
        );
      })}
      </div>
    </section>
  );
}

export default News;