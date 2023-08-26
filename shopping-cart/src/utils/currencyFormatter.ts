const FORMATCURRENCY = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const currencyFormatter = (number: number) => {
  return FORMATCURRENCY.format(number);
};
