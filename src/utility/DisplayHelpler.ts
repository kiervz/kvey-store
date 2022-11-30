export const currencyFormat = (value: number, currencySymbol = '₱') => {
  return currencySymbol + '' + parseFloat(value.toString()).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
};
  