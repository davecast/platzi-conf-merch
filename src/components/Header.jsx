import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { GlobalStateContext } from '../context/AppContext';

import FaIcons from './FaIcons';

import '../styles/components/Header.css';

const Header = () => {
  const {
    state: { cart },
  } = useContext(GlobalStateContext);

  return (
    <header className="Header">
      <h1 className="Header-title">
        <Link to="/">PlatziConf Merch</Link>
      </h1>
      <div className="Header-checkout">
        <Link to="/checkout">
          <FaIcons icon={faShoppingBasket} />
        </Link>
        {cart.length > 0 && <div className="Header-alert">{cart.length}</div>}
      </div>
    </header>
  );
};

export default Header;
