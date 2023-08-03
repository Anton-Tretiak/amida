import { FC } from 'react';

import { ProductCard } from '../ProductCard/ProductCard';

import { Product } from '../../Types/Product';

type Props = {
  products: Product[];
};

export const ProductList: FC<Props> = ({ products }) => {
  return (
    <div>
      <div className='list'>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}