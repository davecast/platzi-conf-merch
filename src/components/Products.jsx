import React, { useContext } from 'react';
import { GlobalStateContext } from '../context/AppContext';

import Product from './Product';

import '../styles/components/Products.css';

const Products = () => {
  const {
    state: { products },
    addToCart,
  } = useContext(GlobalStateContext);

  const handleAddToCart = (product) => {
    addToCart(product);
  };
  return (
    <div className="Products">
      <div className="Products-items">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
