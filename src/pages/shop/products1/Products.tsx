import React from 'react';
import { Product } from './Product';
import { IProduct } from './types/product';

export interface ProductsProps {
  products: IProduct[];
}

export const Products: React.FC<ProductsProps> = ({ products }) => {
  return (
    <div className="mt-4 grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      { products != null &&
        products.map((product: IProduct) => (
          <Product
            {...product}
            key={product.slug}
          />
        )) }
    </div>
  );
};