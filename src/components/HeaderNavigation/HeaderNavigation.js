import './HeaderNavigation.css';
import NavSocialLinks from '../NavSocialLinks/NavSocialLinks';

function HeaderNavigation() {
  return (
    <nav className="header-navigation">
      <NavSocialLinks />
      <ul className="header-navigation__links">
        <li className="header-navigation__list-item">
          <a href="/#" className="header-navigation__link">
            О клубе
          </a>
        </li>
        <li className="header-navigation__list-item">
          <a href="/#" className="header-navigation__link">
            Интерьер
          </a>
        </li>
        <li className="header-navigation__list-item">
          <a href="/#" className="header-navigation__link">
            Меню
          </a>
        </li>
        <li className="header-navigation__list-item">
          <a href="/#" className="header-navigation__link">
            Преимущества
          </a>
        </li>
        <li className="header-navigation__list-item">
          <a href="/#" className="header-navigation__link">
            Новости
          </a>
        </li>
        <li className="header-navigation__list-item">
          <a href="/#" className="header-navigation__link">
            Контакты
          </a>
        </li>
      </ul>
    </nav>
  );
}
export default HeaderNavigation;