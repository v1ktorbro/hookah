import './Interior.css';
import {arrWithInteriorImages} from '../../utils/arrWithInteriorImages';

function Interior({children}) {
  return (
    <section className="interior">
      <div className="interior__block-navigation">
        <h2 className="interior__title">Интерьер</h2>
        {children}
      </div>
      <div className="interior__block-image">
        {arrWithInteriorImages.map((el, i) => {
          return (
            <img src={el.src} alt={`фото интерьера ${i + 1}`} className="interior__image" key={i} />
          );
        })}
      </div>
    </section>
  );
}

export default Interior;