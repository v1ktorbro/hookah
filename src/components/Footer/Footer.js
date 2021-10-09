import './Footer.css';
import mapImage from '../../images/image_map.png';
import lighterImage from '../../images/image_lighter.svg';

function Footer () {
  return (
    <footer className="footer">
      <img src={mapImage} alt="карта местоположения" className="footer__map-image" />
      <div className="footer__wrapper">
      <div className="footer__block-contant">
        <div className="footer__wrapper-block-contact">
          <h2 className="footer__title">Контакты</h2>
          <span className="footer__phone-number">
            <i className="las la-phone" style={{marginRight: '8px', fontSize: '18px'}} />
            +7 (343) 298-98-88
          </span>
          <p className="footer__adress">
            <i className="las la-map-marker" style={{marginRight: '8px', fontSize: '18px'}} />
            Екатеринбург, ул. Малышева 51, БЦ Высоцкий, 50 этаж
          </p>
          <p className="footer__time-work">
            <i className="las la-map-marker" style={{marginRight: '8px', fontSize: '18px'}} />
            вс-чт с 16:00 до 00:00 пт-сб с 16:00 до 04:00
          </p>
        </div>
        <img className="footer__image-lighter" alt="зажигалка" src={lighterImage} />
      </div>
      <div className="footer__btns-block">
        <button className="footer__btn footer__btn_facebook">
          <i className="lab la-facebook-f" style={{marginRight: '5px', fontSize: '23px', color: '#6A6F7D'}} />
          Facebook
        </button>
        <button className="footer__btn footer__btn_instagram">
          <i class="lab la-instagram" style={{marginRight: '5px', fontSize: '23px', color: '#6A6F7D'}} />
          Instagram
        </button>
      </div>
      </div>
    </footer>
  );
}

export default Footer;