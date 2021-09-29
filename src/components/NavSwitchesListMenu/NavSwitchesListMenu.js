/* Рендериться в компоненте MenuOfClub */

import './NavSwitchesListMenu.css';
import React, {useEffect} from 'react';

function NavSwitchesListMenu({title, listTitles, logoImageSrc}) {

  function toggleBtnBackgroundColor(evt) {
    /* собираем и очищаем бэки у всех кнопок */
    const AllBtns = document.querySelectorAll('.nav-switches-list-menu__navigation-title');
    AllBtns.forEach((btn) => {
      btn.classList.remove('nav-switches-list-menu__navigation-title_active');
    })
    evt.target.classList.add("nav-switches-list-menu__navigation-title_active");
  }

  useEffect(() => {
    /* по макету, первая кнопка меню уже выделена цветом */
    document.querySelector(".nav-switches-list-menu__navigation-title").classList.add("nav-switches-list-menu__navigation-title_active");
  }, []);

  return (
  <nav className="nav-switches-list-menu">
    <h2 className="nav-switches-list-menu__title">{title}</h2>
    {logoImageSrc && <img className="nav-switches-list-menu__logo-image" src={logoImageSrc} alt={`пикча ${title}`}/>}
    <nav className="nav-switches-list-menu__navigation">
      {listTitles.split(", ").map((title, index) => {
        return (
          <h3 onClick={(evt) => toggleBtnBackgroundColor(evt)} className="nav-switches-list-menu__navigation-title" key={index}>{title}</h3>
        );
      })}
    </nav>
  </nav>
  );
}

export default NavSwitchesListMenu;