import './Main.css';
import imageSmoke from '../../images/main_smoke.png';

function Main() {
  return (
    <main className="main">
      <h1 className="main__title">Самый шикарный курительный клуб Урала</h1>
      <div className="main__block-image-smoke">
        <img src={imageSmoke} className="main__image-smoke" alt="картинка с дымом" />
        <span className="main__image-rectangle" />
        <div className="main__contact-info">
          <div className="main__block-phone">
            <i className="las la-phone"></i>
            <span className="main__number-phone">+7 (343) 298-98-88</span>
          </div>
          <div className="main__block-working-hours">
            <i className="las la-clock"></i>
            <span className="main__working-hours">вс-чт с 16:00 до 00:00 пт-сб с 16:00 до 04:00</span>
          </div>
          <div className="main__block-addres">
            <i className="las la-map-marker"></i>
            <div className="main__adress">
              <span className="main__addres-city">Екатеринбург,</span>
              <span className="main__adress-street">БЦ Высоцкий, 50 этаж</span>
            </div>
          </div>
        </div>
      </div>
      <div className="main__image-outside">
      </div>
    </main>
  );
}

export default Main;