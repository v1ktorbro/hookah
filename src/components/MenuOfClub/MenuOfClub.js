import './MenuOfClub.css';
import React, { useEffect, useState } from 'react';
import NavSwitchesListMenu from '../NavSwitchesListMenu/NavSwitchesListMenu';
import CardBrandHookah from '../CardBrandHookah/CardBrandHookah';
import CardOfCigars from '../CardOfCigars/CardOfCigars';
import CardClassicHookah from '../CardClassicHookah/CardClassicHookah';
import logoForNavAshtray from '../../images/image_ashtray.svg';
import {arrWithAssortmentBrandHookahs, arrWithAssortmentCigars, arrWithAssortmentClassicHookahs} from '../../utils/arrWithAssortmentOfClub';

function MenuOfClub() {
  const [allCards, setIsAllCards] = useState([]);

  function setNewCutListCard (idTargetList) {
    allCards.filter((card, i) => {
      if (card.id === idTargetList) {
        card.style.display = "block";
        return card;
      } else {
        return card.style.display = "none";
      }
    });
  }

  useEffect(() => {
    const findAllCards = Array.from(document.querySelector(".menu-of-club__block-cards").childNodes);
    const currentListMenu = document.querySelector('.nav-switches-list-menu__navigation-title_active');
    setIsAllCards(findAllCards);
    findAllCards.filter((card) => {
      if (card.id !== currentListMenu.id) return card.style.display = "none";
    })
  }, []);

  return (
      <section className="menu-of-club">
      <NavSwitchesListMenu 
        title="Меню"
        listTitles="Фирменные кальяны, Сигары и сигарилы, Классические кальяны"
        idTitles="brand-hookah, cigars, classic-hookah"
        logoImageSrc={logoForNavAshtray}
        setNewCutListCard={setNewCutListCard}
      />
        <div className="menu-of-club__block-cards">
          {arrWithAssortmentBrandHookahs.map((card, index) => {
            return (
              <CardBrandHookah idCard="brand-hookah" dataCard={card} key={index} />
            );
          })}
          {arrWithAssortmentCigars.map((card, index) => {
            return (
              <CardOfCigars idCard="cigars" dataCard={card} key={index} />
            );
          })}
          {arrWithAssortmentClassicHookahs.map((card, index) => {
            return (
              <CardClassicHookah idCard="classic-hookah" dataCard={card} key={index} />
            );
          })}
        </div>
      </section>
  );
}

export default MenuOfClub;