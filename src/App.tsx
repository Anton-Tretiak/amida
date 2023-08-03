import { useState, useEffect } from 'react';

import { Header } from './Components/Header/Header';
import { ProductList } from './Components/ProductList/ProductList';

import './App.scss';

export const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('./data.json');
        const data = await response.json();

        setProducts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="App">
      <Header />

      <ProductList products={products} />
    </div>
  );
}
