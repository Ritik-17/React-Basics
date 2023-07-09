import React from 'react';
import './App.css';
import Products from './Components/Products';
import NewProduct from './Components/NewProduct';

const App = () => {
  const products = [
    {
      id: 'p1',
      title: 'Nirma',
      amount: 100,
      Date : new Date(2021, 8, 10),
    },
    {
      id: 'p2',
      title: 'Surf Excel',
      amount: 100,
      Date : new Date(2021, 8, 10),
    },
    {
      id: 'p3',
      title: 'Tide',
      amount: 100,
      Date : new Date(2021, 8, 10),
    },
    {
      id: 'p4',
      title: 'Gadhi',
      amount: 100,
      Date : new Date(2025, 8, 10),
    },
  ];
  return (
    <div>
      <NewProduct/>
      <Products items={products}/>
    </div>
  );
}

export default App;
