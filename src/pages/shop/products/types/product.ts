import { IBrand } from './brand';
import { ICategory } from './category';
import { IOther } from './other';
import { IProductImage } from './product-image';

export interface IProduct {
  id: number;
  sku: string;
  name: string;
  slug: string;
  unit_price: number;
  actual_price: number;
  discount: number;
  stock: number;
  description: string;
  productImages: IProductImage[];
  brand: IBrand;
  category: ICategory;
  other: IOther;
}