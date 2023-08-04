import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Header } from './Components/Header/Header';

import { Catalog } from './Pages/Catalog/Catalog';
import { Cart } from './Pages/Cart/Cart';

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
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path='/' element={<Catalog products={products}/>} />

          <Route path='/cart' element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}
