import './NewsCard.css';

function NewsCard({dataCard}) {
  return (
    <article className="news-card">
      <img className="news-card__image" src={dataCard.srcImage} alt="Новостная картинка" />
      <div className="news-card__block-text">
        <span className="news-card__data">{dataCard.dataNews}</span>
        <p className="news-card__title">{dataCard.title}</p>
      </div>
    </article>
  );
} 

export default NewsCard;