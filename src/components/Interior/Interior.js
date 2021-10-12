import './Interior.css';
import React, { useEffect, useState } from 'react';
import {arrWithInteriorImages} from '../../utils/arrWithInteriorImages';
import NavSwitchesCards from '../NavSwitchesCards/NavSwitchesCards';

function Interior() {
  //массив с карточками будет приходить из NavSwitchesCards
  const [arrOnRender, setArrOnRender] = useState([]);

  useEffect(() => {
    document.getElementsByName('btn-nav-photo-interior').forEach((btn) => {
      if (btn.disabled) {
          btn.style.color = '#6E7483';
          btn.style.border = '1px solid #4D515D';
      } else {
        btn.style.color = '#D5D9E3';
        btn.style.border = '1px solid #777B8A';
      }
    })
  }, [arrOnRender])

  return (
    <section className="interior">
      <div className="interior__block-navigation">
        <h2 className="interior__title">Интерьер</h2>
        <NavSwitchesCards
          style={{color: '#D5D9E3'}}
          arrWIthCards={arrWithInteriorImages}
          countCardOnPage={4}
          setArrOnRender={setArrOnRender}
          btnName="btn-nav-photo-interior"
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