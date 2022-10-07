export const calcDiscountPrice = (price: string, discount: number): string => {
  return (Number(price) - (Number(price) / 100) * discount).toFixed(2);
};
