export const currencyFormat = (value: number, currencySymbol = '₱', decimal = 2) => {
  return currencySymbol + '' + parseFloat(value.toString()).toFixed(decimal).replace(/\d(?=(\d{3})+\.)/g, '$&,');
};

export const truncate = (str: string, max: number) => {
  return str.length > max ? str.substring(0, max) + '...' : str;
};