import './NavSwitchesCards.css';
import React, { useEffect, useReducer} from 'react';
/* кнопки наследуют цвет компонента (через пропс style) */

function NavSwitchesCards({style, idBtn, countCardOnPage, arrWIthCards, setArrOnRender, btnName}) {
  const [state, dispatch] = useReducer(handlerBtnClick, { startIndex: 0, lastIndex: countCardOnPage});
  //колбэк ф-я для useReducer
  function handlerBtnClick(state, btnClick) {
    switch (btnClick) {
      case '>': return { startIndex: state.startIndex + 1, lastIndex: state.lastIndex + 1};
      case '<': return { startIndex: state.startIndex - 1, lastIndex: state.lastIndex - 1};
      default: return state;
    }
  }
  
  function handlerNewSliceArr (evt) {
    dispatch(evt.target.textContent)
    setArrOnRender(arrWIthCards.slice(state.startIndex, state.lastIndex));
  }

  useEffect(() => {
    setArrOnRender(arrWIthCards.slice(state.startIndex, state.lastIndex));
  }, [arrWIthCards, setArrOnRender, state]);

  return (
    <nav className="nav-switches-cards" style={style}>
      <button  
        className={`nav-switches-cards__button ${state.startIndex === 0 ? "nav-switches-cards__button_disabled-style" : ""}`}
        id={`btn-${idBtn} btn-${idBtn}-prev`}
        name={btnName}
        disabled={state.startIndex === 0 ? true : false} 
        onClick={(evt) => handlerNewSliceArr(evt)}
        >&#60;
      </button>
      <button 
        className={`nav-switches-cards__button ${state.lastIndex === arrWIthCards.length ? "nav-switches-cards__button_disabled-style" : ""}`}
        id={`btn-${idBtn} btn-${idBtn}-next`}
        name={btnName}
        disabled={state.lastIndex === arrWIthCards.length ? true : false} 
        onClick={(evt) => handlerNewSliceArr(evt)} 
        >&#62;
      </button>
    </nav>
  );
}

export default NavSwitchesCards;