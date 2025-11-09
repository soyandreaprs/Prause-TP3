export const usePrice = (id) => {
  const idString = String(id || "0");
  const lastTwoDigits = idString.slice(-2);
  const priceComponent = parseInt(lastTwoDigits, 10) || 0;
  const finalPrice = 50 + priceComponent;
  return finalPrice;
};