import './About.css';
import { arrWithDescripServices } from '../../utils/arrWithDescripServices';

function About() {
  console.log(arrWithDescripServices);
  return (
    <section className="about">
      <div className="about__content">
        <div className="about__wrapper-block-traditions">
          <div className="about__block-traditions">
            <h1 className="about__title">Возраждаем традицию</h1>
            <p className="about__description">Сигара в достойной компании,  оттененная бокалом бренди, всегда была не только обязательным  атрибутом джентльмена, но и данью традициям. Поклонники сигар  встречались в курительных клубах, обсуждали последние новости и  вершили судьбы мира. Прошло время, и теперь традицию курительных   клубов возрождает «Дым кудрявый» в Екатеринбурге.</p>
          </div>
          <div className="about__block-images">
            <div className="about__wrapper-image-cigar">
              <span className="about__image_cigar" />
              <span className="about__image_cigar" />
            </div>
            <span className="about__image_hookah" />
          </div>
        </div>
        <div className="about__block-services">
        {arrWithDescripServices.map((item, index) => {
          return (
            <div className="about__card" key={index} >
              <h2 className="about__card-title">{item.title}</h2>
              <p className="about__card-description">{item.description}</p>
            </div>
          );
        })}
        </div>
      </div>
    </section>
  );
}

export default About;