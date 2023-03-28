export const getPriceWithCurrency = (currency_code, price) => {
  const currency = {
    USD: "$",
    EUR: "€",
  };

  return !!currency.hasOwnProperty(currency_code)
    ? `${currency[currency_code]}${price}`
    : `${price} ${currency_code}`;
};

export const getQuantityLevelClasses = (quantity) => {
  let levelClass = "level-medium";
  if (quantity > 20) {
    levelClass = "level-high";
  } else if (quantity <= 10) {
    levelClass = "level-low";
  }

  return `item-quantity ${levelClass}`;
};
