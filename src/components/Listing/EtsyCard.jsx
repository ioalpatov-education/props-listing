import { getPriceWithCurrency } from "./listingUtils";

const EtsyCard = ({ item }) => {
  const { url, MainImage, title, currency_code, price, quantity } = item;

  const priceWithCurrency = getPriceWithCurrency(currency_code, price);

  return (
    <div className="item">
      <div className="item-image">
        <a href={url}>
          <img src={MainImage?.url_570xN} alt={title} />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{title}</p>
        <p className="item-price">{priceWithCurrency}</p>
        <p className="item-quantity level-medium">12 left</p>
      </div>
    </div>
  );
};

export default EtsyCard;
