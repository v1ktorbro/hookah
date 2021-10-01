import './CardOfCigars.css';

function CardOfCigars({dataCard, idCard}) {
  return (
    <article className="card-of-cigars" id={idCard}>
      <h3 className="card-of-cigars__title">{dataCard.name}</h3>
      {dataCard.brands.map((brand, index) => {
        return (
          <span className="card-of-cigars__brand" key={index}>{brand}</span>
        );
      })}
    </article>
  );
}

export default CardOfCigars;