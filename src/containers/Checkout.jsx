import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { GlobalStateContext } from '../context/AppContext';
import setTotals from '../utils/setTotals';

import FaIcons from '../components/FaIcons';
import MetaHead from '../components/MetaHead';

import '../styles/components/Checkout.css';

const meta = (
  <MetaHead
    title="Lista de Pedidos"
    description="Lista de tu pedido"
    image="https://davecast.s3.amazonaws.com/avatarnegativo.jpg"
    url="https://mocafood.xyz/"
  />
);

const Checkout = () => {
  const { state, removeFromCart } = useContext(GlobalStateContext);
  const { cart } = state;

  const sumTotal = setTotals(cart);

  const handleRemove = (product) => {
    removeFromCart(product);
  };

  return (
    <>
      {meta}
      <div className="Checkout">
        <div className="Checkout-content">
          {cart.length > 0 ? <h3>Lista de pedidos</h3> : <h3>Sin pedidos</h3>}
          {cart.map((item) => (
            <div key={item.id} className="Checkout-item">
              <div className="Checkout-element">
                <h4>{item.title}</h4>
                <span>{item.price}</span>
              </div>
              <button
                type="button"
                onClick={() => {
                  handleRemove(item);
                }}
              >
                <FaIcons icon={faTrashAlt} />
              </button>
            </div>
          ))}
        </div>
        {cart.length > 0 && (
          <aside className="Checkout-sidebar">
            <h3>{`Precio Total: $ ${sumTotal}`}</h3>
            <Link to="/checkout/information">
              <button type="button">Continuar pedido</button>
            </Link>
          </aside>
        )}
      </div>
    </>
  );
};

export default Checkout;
