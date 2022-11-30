export const currencyFormat = (value: number, currencySymbol = '₱', decimal = 2) => {
  return currencySymbol + '' + parseFloat(value.toString()).toFixed(decimal).replace(/\d(?=(\d{3})+\.)/g, '$&,');
};
  