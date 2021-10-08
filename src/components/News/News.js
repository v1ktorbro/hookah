import { useEffect, useState, useReducer } from 'react';
import './News.css';
import NewsCard from '../NewsCard/NewsCard';
import NavSwitchesCards from '../NavSwitchesCards/NavSwitchesCards';
import {arrWithNewsCompany} from '../../utils/arrWithNewsCompany';

//countCardOnPage - желаемое количество карточек, которых хочется видеть на странице
function News({countCardOnPage}) {
  // "<" и ">"
  const [btnNextImage, setBtnNextImage] = useState();
  const [btnPrevImage, setBtnPrevImage] = useState();
  const [state, dispatch] = useReducer(handlerBtnClick, { startIndex: 0, lastIndex: countCardOnPage});

  //колбэк ф-я для useReducer
  function handlerBtnClick(state, btnClick) {
    switch (btnClick) {
      case '>': return { startIndex: state.startIndex + 1, lastIndex: state.lastIndex + 1};
      case '<': return { startIndex: state.startIndex - 1, lastIndex: state.lastIndex - 1};
      default: return state;
    }
  }

  //ф-я для отключения кнопки
  const disableBtn = (btn) => {
    btn.disabled = true;
    btn.classList.add('nav-switches-cards__button_disabled-style');
  }
//ф-я для вкл кнопки
  const enabledBtn = (btn) => {
    btn.disabled = false;
    btn.classList.remove('nav-switches-cards__button_disabled-style');
  }

  //коллбек при клике на кнопку "<"
  function prevImage() {
    if (state.startIndex === 0) return disableBtn(btnPrevImage);
    enabledBtn(btnNextImage)
    dispatch(btnPrevImage.textContent);
  }

  //коллбек при клике на кнопку ">"
  function nextImage() {
    if (state.lastIndex === arrWithNewsCompany.length) return disableBtn(btnNextImage);
    enabledBtn(btnPrevImage);
    dispatch(btnNextImage.textContent);
  }

  useEffect(() => {
    setBtnNextImage(document.getElementById('btn-news-next'));
    setBtnPrevImage(document.getElementById('btn-news-prev'));
    btnPrevImage !== undefined && disableBtn(btnPrevImage);
  }, [btnPrevImage])

  return (
    <section className="news">
    <div className="news__nav-wrapper">
      <h1 className="news__title">Новости</h1>
      <NavSwitchesCards
        btnPrevImage={prevImage}
        btnNextImage={nextImage}
        idBtn="news"
      />
    </div>
      <div className="news__cards">
      {arrWithNewsCompany.slice(state.startIndex, state.lastIndex).map((cardNews, index) => {
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