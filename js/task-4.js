function getShippingCost(country) {
  const PRICE_CHINA = 100;
  const PRICE_CHILE  = 250;
  const PRICE_AUSTRALIA = 170;
  const PRICE_JAMAICA = 120;
  switch (country) {
    case 'China':
      return `Shipping to ${country} will cost ${PRICE_CHINA} credits`;

    case 'Chile':
      return `Shipping to ${country} will cost ${PRICE_CHILE } credits`;

    case 'Australia':
      return `Shipping to ${country} will cost ${PRICE_AUSTRALIA} credits`;

    case 'Jamaica':
      return `Shipping to ${country} will cost ${PRICE_JAMAICA} credits`;

    default:
      return 'Sorry, there is no delivery to your country';
  }
}
console.log(getShippingCost('Australia')); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost('Germany')); // "Sorry, there is no delivery to your country"
console.log(getShippingCost('China')); // "Shipping to China will cost 100 credits"
console.log(getShippingCost('Chile')); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost('Jamaica')); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost('Sweden')); // "Sorry, there is no delivery to your country"
