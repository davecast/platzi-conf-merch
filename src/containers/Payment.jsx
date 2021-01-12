import React, { useContext } from 'react';
import { PayPalButton } from 'react-paypal-button';
import { GlobalStateContext } from '../context/AppContext';
import '../styles/components/Payment.css';
import setTotals from '../utils/setTotals';

const Payment = ({ history }) => {
  const { state, addNewOrder } = useContext(GlobalStateContext);
  const { cart, buyer } = state;

  const sumTotal = setTotals(cart);

  const paypalOtions = {
    clientId:
      'AWwFCVF2-GuRwKDsUhScozVxr5joBw8qIUzvxTiQ7GAGwzIH9zfrgLPUIj8xv2n8MF5tmz5ZcwuiCAly',
    intent: 'capture',
    currency: 'USD',
  };

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  };

  const handlePaymentSuccess = (data) => {
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data,
      };
      addNewOrder(newOrder);
      history.push('/checkout/success');
    }
  };

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resument del pedido:</h3>
        {cart.map((item) => (
          <div className="Payment-item" key={item.title}>
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>
                $
                {item.price}
              </span>
            </div>
          </div>
        ))}
        <div className="Payment-button">
          <PayPalButton
            paypalOptions={paypalOtions}
            buttonStyles={buttonStyles}
            amount={sumTotal}
            onPaymentStart={() => console.log('Start Payment')}
            onPaymentSuccess={(data) => handlePaymentSuccess(data)}
            onPaymentError={(error) => console.log(error)}
            onPaymentCancel={(data) => console.log(data)}
          />
        </div>
      </div>
      <div />
    </div>
  );
};

export default Payment;
