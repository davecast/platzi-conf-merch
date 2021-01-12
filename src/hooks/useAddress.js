import { useState, useEffect } from 'react';
import axios from 'axios';

const useAddress = (address = '341  Bastin Drive PANAMA CITY BEACH') => {
  const [map, setMap] = useState({});
  const API = `http://api.positionstack.com/v1/forward?access_key=684ac6106e1da72385b8a02974160fe8&query=${encodeURI(
    address
  )}`;

  useEffect(async () => {
    const response = await axios(API);
    console.log(response);
    setMap(response.data.data[0]);
  }, []);

  return map;
};

export default useAddress;
