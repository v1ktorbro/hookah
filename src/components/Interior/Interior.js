import './Interior.css';
import React, { useState } from 'react';
import {arrWithInteriorImages} from '../../utils/arrWithInteriorImages';
import NavSwitchesCards from '../NavSwitchesCards/NavSwitchesCards';

function Interior({children}) {
  //массив с карточками будет приходить из NavSwitchesCards
  const [arrOnRender, setArrOnRender] = useState([]);
  return (
    <section className="interior">
      <div className="interior__block-navigation">
        <h2 className="interior__title">Интерьер</h2>
        <NavSwitchesCards
          style={{color: '#D5D9E3'}}
          arrWIthCards={arrWithInteriorImages}
          countCardOnPage={4}
          setArrOnRender={setArrOnRender}
        />
      </div>
      <div className="interior__block-image">
        {arrOnRender.map((el, i) => {
          return (
            <img src={el.src} alt={`фото интерьера ${i + 1}`} className="interior__image" key={i} />
          );
        })}
      </div>
    </section>
  );
}

export default Interior;