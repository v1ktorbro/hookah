import './Navigation.css';
import NavSocialLinks from '../NavSocialLinks/NavSocialLinks';

function Navigation() {
  return (
    <nav className="navigation">
      <NavSocialLinks />
      <ul className="navigation__links">
        <li className="navigation__list-item">
          <a href="/#" className="navigation__link">
            О клубе
          </a>
        </li>
        <li className="navigation__list-item">
          <a href="/#" className="navigation__link">
            Интерьер
          </a>
        </li>
        <li className="navigation__list-item">
          <a href="/#" className="navigation__link">
            Меню
          </a>
        </li>
        <li className="navigation__list-item">
          <a href="/#" className="navigation__link">
            Преимущества
          </a>
        </li>
        <li className="navigation__list-item">
          <a href="/#" className="navigation__link">
            Новости
          </a>
        </li>
        <li className="navigation__list-item">
          <a href="/#" className="navigation__link">
            Контакты
          </a>
        </li>
      </ul>
    </nav>
  );
}
export default Navigation;