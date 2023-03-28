const EtsyCard = ({ item }) => {
  const { url, MainImage, title, currency_code, price, quantity } = item;

  const img = !!MainImage ? MainImage.url_570xN : "";

  return (
    <div className="item">
      <div className="item-image">
        <a href={url}>
          <img src={img} alt={title} />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{title}</p>
        <p className="item-price">$3.99</p>
        <p className="item-quantity level-medium">12 left</p>
      </div>
    </div>
  );
};

export default EtsyCard;
