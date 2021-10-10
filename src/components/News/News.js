import { useState } from 'react';
import './News.css';
import NewsCard from '../NewsCard/NewsCard';
import NavSwitchesCards from '../NavSwitchesCards/NavSwitchesCards';
import {arrWithNewsCompany} from '../../utils/arrWithNewsCompany';

//countCardOnPage - желаемое количество карточек, которых хочется видеть на странице
function News({countCardOnPage}) {
  //массив с карточками будет приходить из NavSwitchesCards
  const [arrOnRender, setArrOnRender] = useState([]);

  return (
    <section className="news">
    <div className="news__nav-wrapper">
      <h1 className="news__title">Новости</h1>
      <NavSwitchesCards
        countCardOnPage={countCardOnPage}
        arrWIthCards={arrWithNewsCompany}
        setArrOnRender={setArrOnRender}
      />
    </div>
      <div className="news__cards">
      {arrOnRender.map((cardNews, index) => {
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