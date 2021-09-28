import './CardOfCigars.css';

function CardOfCigars({dataCard}) {
  return (
    <article className="card-of-cigars">
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