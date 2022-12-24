export interface PriceRange {
  initalMin: number;
  initalMax: number;
  min: number;
  max: number;
  step: number;
  priceCap: number;
  handlePriceRange: (priceRange: number[]) => void;
}