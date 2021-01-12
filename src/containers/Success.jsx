import React, { useContext } from 'react';
import { GlobalStateContext } from '../context/AppContext';

import Map from '../components/Map';
import useAddress from '../hooks/useAddress';

import '../styles/components/Success.css';

const Success = () => {
  const {
    state: { buyer },
  } = useContext(GlobalStateContext);

  const address = useAddress(buyer.address);

  return (
    <div className="Success">
      <div className="Success-content">
        <h2>{`${buyer.name}, Gracias por tu compra`}</h2>
        <span>Tu pedidido llegara en 3 dias a tu direccion</span>
        <div className="Success-map">
          {address?.latitude && <Map address={address} />}
        </div>
      </div>
    </div>
  );
};
export default Success;
