import './MenuOfClub.css';
import React, { useEffect, useState } from 'react';
import {arrWithAssortmentBrandHookahs, arrWithAssortmentCigars} from '../../utils/arrWithAssortmentOfClub';

function MenuOfClub() {

  const [isMenuBrandHookahs, setIsMenuBrandHookahs] = useState(false);
  const [isMenuCigars, setIsMenuCigars] = useState(false);
  const [isMenuClassicHookahs, setIsMenuClassicHookahs] = useState(false);

  function handleMenuBrandHookahs() {
    setIsMenuBrandHookahs(true);
    setIsMenuCigars(false);
    setIsMenuClassicHookahs(false);
  }

  function handleMenuCigars() {
    setIsMenuBrandHookahs(false);
    setIsMenuCigars(true);
    setIsMenuClassicHookahs(false);
  }

  function handleMenuClassicHookahs() {
    setIsMenuBrandHookahs(false);
    setIsMenuCigars(false);
    setIsMenuClassicHookahs(true);
  }

  useEffect(() => {
    setIsMenuBrandHookahs(true);
  }, []);

  return (
      <section className="menu-of-club">
        <div className="menu-of-club__wrapper">
          <h2 className="menu-of-club__title">Меню</h2>
          <span className="menu-of-club__image-ashtray" />
          <nav className="menu-of-club__navigation">
            <h3 onClick={() => handleMenuBrandHookahs()} className={isMenuBrandHookahs ? "menu-of-club__navigation-title menu-of-club__navigation-title_active" : "menu-of-club__navigation-title"}>Фирменные кальяны</h3>
            <h3 onClick={() => handleMenuCigars()} className={isMenuCigars ? "menu-of-club__navigation-title menu-of-club__navigation-title_active" : "menu-of-club__navigation-title"}>Сигары и сигарилы</h3>
            <h3 onClick={() => handleMenuClassicHookahs()} className={isMenuClassicHookahs ? "menu-of-club__navigation-title menu-of-club__navigation-title_active" : "menu-of-club__navigation-title"}>Классические кальяны</h3>
          </nav>
        </div>
      </section>
  );
}

export default MenuOfClub;