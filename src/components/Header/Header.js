import './Header.css';
import logo from '../../images/logo.svg';

function Header({children}) {
  return (
    <header className="header">
      <img src={logo} alt="логотип" className="header__logo" />
      {children}
    </header>
  );
}

export default Header;