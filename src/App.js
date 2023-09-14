import React, { useState, useEffect } from 'react';
import './App.css';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    setProducts(storedProducts);
  }, []);

  const addProduct = (product) => {
    const updatedProducts = [...products, product];
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };

  const deleteProduct = (productId) => {
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };

  return (
    <div className="App">
      <ProductForm addProduct={addProduct} />
      <ProductList products={products} deleteProduct={deleteProduct} />
    </div>
  );
}

export default App;
