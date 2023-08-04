import { FC } from 'react';

import { ProductList } from '../../Components/ProductList/ProductList';

import { Product } from '../../Types/Product';

type Props = {
  products: Product[];
}

export const Catalog: FC<Props> = ({ products }) => {
  return (
    <ProductList products={products}/>
  );
};