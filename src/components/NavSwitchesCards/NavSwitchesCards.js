import './NavSwitchesCards.css';
/* кнопки наследуют цвет компонента (через пропс style) */

function NavSwitchesCards({style, btnPrevImage, btnNextImage, idBtn}) {
  
  return (
    <nav className="nav-switches-cards" style={style}>
      <button onClick={(evt) => btnPrevImage(evt)} className="nav-switches-cards__button" id={`btn-${idBtn}-prev`}>&#60;</button>
      <button onClick={(evt) => btnNextImage(evt)} className="nav-switches-cards__button" id={`btn-${idBtn}-next`}>&#62;</button>
    </nav>
  );
}

export default NavSwitchesCards;