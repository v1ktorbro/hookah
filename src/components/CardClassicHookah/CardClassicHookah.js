import './CardClassicHookah.css';

function CardClassicHookah({dataCard}) {
  return (
    <article className="card-classic-hookah">
      <h3 className="card-classic-hookah__title">{dataCard.name}</h3>
      {dataCard.views.map((el, i) => {
        return (
          <div className="card-classic-hookah__info-block" key={i}>
            <h4 className="card-classic-hookah__title-fruit">{el.fruit}</h4>
            {el.type.map((item, index) => {
              return (
                <div className="card-classic-hookah__wrapper-classification" key={index}>
                  <p className="card-classic-hookah__grade">{item.classification}
                    <span className="card-classic-hookah__price">&#32;{item.price}&#32;&#8381;</span>
                  </p>
                  <span className="card-classic-hookah__strength">{item.strength && `Крепость: ${item.strength}`}</span>
                  </div>
              );
            })}
          </div>
        );
      })}
      <p className="card-classic-hookah__note">{dataCard.note}</p>
    </article>
  );
}

export default CardClassicHookah;