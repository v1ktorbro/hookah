import './NavSwitchesCards.css';

function NavSwitchesCards({hStyle}) {
  return (
    <nav className="nav-switches-cards" style={{hStyle}}>
      <button className="nav-switches-cards__button nav-switches-cards__button_left">&#60;</button>
      <button className="nav-switches-cards__button nav-switches-cards__button_right">&#62;</button>
    </nav>
  );
}

export default NavSwitchesCards;