import {
  getPriceWithCurrency,
  getQuantityLevelClasses,
  getLimitedTitle,
} from "./listingUtils";

const EtsyCard = ({ item }) => {
  const { url, MainImage, title, currency_code, price, quantity } = item;

  const priceWithCurrency = getPriceWithCurrency(currency_code, price);
  const quantityLevelClasses = getQuantityLevelClasses(quantity);
  const limitedTitle = getLimitedTitle(title);

  return (
    <div className="item">
      <div className="item-image">
        <a href={url}>
          <img src={MainImage?.url_570xN} alt={title} />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{limitedTitle}</p>
        <p className="item-price">{priceWithCurrency}</p>
        <p className={quantityLevelClasses}>{quantity} left</p>
      </div>
    </div>
  );
};

export default EtsyCard;
