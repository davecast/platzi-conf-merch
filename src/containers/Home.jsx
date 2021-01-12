import React from 'react';
import initialState from '../initialState';

import Products from '../components/Products';
import MetaHead from '../components/MetaHead';

const meta = (
  <MetaHead
    title="Productos"
    description="Encuentra todos tus productos favoritos"
    image="https://davecast.s3.amazonaws.com/avatarnegativo.jpg"
    url="https://mocafood.xyz/"
  />
);

const Home = () => (
  <>
    {meta}
    <Products products={initialState.products} />
  </>
);

export default Home;
