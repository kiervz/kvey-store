export const currencyFormat = (value: number, currencySymbol = '₱', decimal = 2) => {
  return currencySymbol + '' + parseFloat(value.toString()).toFixed(decimal).replace(/\d(?=(\d{3})+\.)/g, '$&,');
};

export const truncate = (str: string, max: number) => {
  return str.length > max ? str.substring(0, max) + '...' : str;
};

export const removeDuplicatesById = (items: any[]) => {
  const seenIds = new Set();
  return items.filter((item: any) => {
    if (seenIds.has(item.id)) {
      return false;
    } else {
      seenIds.add(item.id);
      return true;
    }
  });
};