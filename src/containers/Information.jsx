import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { GlobalStateContext } from '../context/AppContext';
import useForm from '../hooks/useForm';
import setTotals from '../utils/setTotals';

import '../styles/components/Information.css';

const initialFormState = {
  name: 'David',
  email: 'davecas26@gmail.com',
  address: 'calle 90 santa lucia maracaibo zulia venezuela',
  apto: 'casa',
  city: 'maracaibo',
  country: 'ciudad',
  state: 'zulia',
  cp: '4001',
  phone: '04246811420',
};

const Information = () => {
  const {
    state: { cart },
    addToBuyer,
  } = useContext(GlobalStateContext);
  const history = useHistory();
  const sumTotal = setTotals(cart);

  const [formValues, handleChanges] = useForm(initialFormState);

  const handleSubmit = () => {
    addToBuyer(formValues);
    history.push('/checkout/payment');
  };

  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Informacion de contacto:</h2>
        </div>
        <div className="Information-form">
          <form>
            <input
              type="text"
              placeholder="Nombre completo"
              name="name"
              value={formValues.name}
              onChange={handleChanges}
            />
            <input
              type="text"
              placeholder="Correo Electronico"
              name="email"
              value={formValues.email}
              onChange={handleChanges}
            />
            <input
              type="text"
              placeholder="Direccion"
              name="address"
              value={formValues.address}
              onChange={handleChanges}
            />
            <input
              type="text"
              placeholder="Aptp"
              name="apto"
              value={formValues.apto}
              onChange={handleChanges}
            />
            <input
              type="text"
              placeholder="Ciudad"
              name="city"
              value={formValues.city}
              onChange={handleChanges}
            />
            <input
              type="text"
              placeholder="Pais"
              name="country"
              value={formValues.country}
              onChange={handleChanges}
            />
            <input
              type="text"
              placeholder="Estado"
              name="state"
              value={formValues.state}
              onChange={handleChanges}
            />
            <input
              type="text"
              placeholder="Codigo postal"
              name="cp"
              value={formValues.cp}
              onChange={handleChanges}
            />
            <input
              type="text"
              placeholder="Telefono"
              name="phone"
              value={formValues.phone}
              onChange={handleChanges}
            />
          </form>
        </div>
        <div className="Information-buttons">
          <div className="Information-back">
            <Link to="/checkout">Regresar</Link>
          </div>
          <div className="Information-next">
            <button type="button" onClick={handleSubmit}>
              Pagar
            </button>
          </div>
        </div>
      </div>
      <adide className="Information-sidebar">
        <h3>Pedidos</h3>
        {cart.map((item) => (
          <div key={item.title} className="Information-item">
            <div className="Information-element">
              <h4>{item.title}</h4>
              <span>
                $
                {item.price}
              </span>
            </div>
          </div>
        ))}
        <hr />
        <h3>{`Precio Total: $ ${sumTotal}`}</h3>
      </adide>
    </div>
  );
};

export default Information;
