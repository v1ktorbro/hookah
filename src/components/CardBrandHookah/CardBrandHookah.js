import './CardBrandHookah.css';

function CardBrandHookah({dataCard, idCard}) {
  return (
    <article className="card-brand-hookah" id={idCard}>
      <div className="card-brand-hookah__block-title">
        <h3 className="card-brand-hookah__title">&#171;{dataCard.name}&#187;</h3>
        <span className="card-brand-hookah__price">{dataCard.price}&#32;&#8381;</span>
      </div>
        <h4 className="card-brand-hookah__title-ingredient">Добавки:
          <span className="card-brand-hookah__kind-ingredient">&#32;{dataCard.supplements}</span>
        </h4>
        <h4 className="card-brand-hookah__title-ingredient">{dataCard.bowl.length > 1 ? "Чаша на выбор" : "Чаша"}:
          <span className="card-brand-hookah__kind-ingredient">&#32;{dataCard.bowl.join(', ')}</span>
        </h4>
        <h4 className="card-brand-hookah__title-ingredient">Крепость:
          <span className="card-brand-hookah__kind-ingredient">&#32;{dataCard.strength}</span>
        </h4>
    </article>
  );
}

export default CardBrandHookah;