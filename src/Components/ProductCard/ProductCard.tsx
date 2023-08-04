import { FC } from 'react';
import { Card, Button } from 'react-bootstrap'

import { Product } from '../../Types/Product';

type Props = {
  product: Product;
};

export const ProductCard: FC<Props> = ({ product }) => (
  <Card style={{ width: '200px', padding: '10px', marginBottom: '20px', boxSizing: 'border-box' }}>
    <Card.Img
      variant="top"
      src={product.image}
      style={{ width: '160px', height: '200px', objectFit: 'cover', alignSelf: 'center' }}
    />

    <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <Card.Title style={{ textAlign: 'center' }}>{product.name}</Card.Title>
      <Button variant="outline-primary">Add to Cart</Button>
    </Card.Body>
  </Card>
);