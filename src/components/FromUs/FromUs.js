import './FromUs.css';
import imagePetal from '../../images/image_petal.svg';

const arrWithAdvantage = [
  "Шикарный вид на город с 50-го этажа БЦ «Высоцкий»",
  "Авторские миксы, которые меняются каждый месяц и способны удовлетворить каждого требовательного гостя",
  "Уникальная атмосфера уединения и комфорта",
  "Персонал — подготовленные мастера своего дела"
];

function FromUs() {
  
  return (
    <section className="from-us">
      <div className="from-us__card-description">
        <div className="from-us__title-block">
          <h2 className="from-us__title">У нас уютно</h2>
          <img className="from-us__image-petal" src={imagePetal} alt="картинка с лепестком" />
        </div>
        <ul className="from-us__list">
          {arrWithAdvantage.map((el, i) => {
            return (
              <li className="from-us__list-item" key={i}>&#47;&#47;
                <span className="from-us-list-item-text">{el}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default FromUs;