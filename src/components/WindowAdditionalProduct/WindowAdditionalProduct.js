import './WindowAdditionalProduct.css';

function WindowAdditionalProduct({title, description, btnName}) {
  return (
    <div className="window-additional-product">
      <div className="window-additional-product__wrapper">
        <h2 className="window-additional-product__title">{title}</h2>
        <p className="window-additional-product__description">{description}</p>
      </div>
      <button type="button" className="window-additional-product__btn-know-more">{btnName} &#8594;</button>
    </div>
  );
}

export default WindowAdditionalProduct;