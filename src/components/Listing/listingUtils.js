export const getPriceWithCurrency = (currency_code, price) => {
  const currency = {
    USD: "$",
    EUR: "€",
  };

  return !!currency.hasOwnProperty(currency_code)
    ? `${currency[currency_code]}${price}`
    : `${price} ${currency_code}`;
};
