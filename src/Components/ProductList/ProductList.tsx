import { FC } from 'react';
import { Col, Row } from 'react-bootstrap';

import { ProductCard } from '../ProductCard/ProductCard';
import { PageHeading } from '../PageHeading/PageHeading';

import { Product } from '../../Types/Product';

import './ProductList.scss';

type Props = {
  products: Product[];
};

export const ProductList: FC<Props> = ({ products }) => {
  return (
    <div className='list__wrapper'>
      <PageHeading title='Catalog' />

      <div className='list'>
        <Row xs={1} sm={2} md={3} lg={4}>
          {products.map((product) => (
            <Col key={product.id} style={{ display: 'flex', justifyContent: 'center', padding: 0 }}>
              <ProductCard
                key={product.id}
                product={product}
              />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}