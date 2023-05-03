import React from 'react';
import ReactDOM from 'react-dom';
import PayPalButton from 'react-paypal-button-v2';

function PayDesign() {
  const handlePaymentSuccess = (details, data) => {
    // Lógica para procesar el pago
    console.log('Payment successful', details, data);
  };

  const handlePaymentError = (error) => {
    // Lógica para manejar errores en el pago
    console.error('Payment error', error);
  };

  return (
    <div>
      <h1>Checkout</h1>
      <PayPalButton
        amount="10.00"
        onSuccess={handlePaymentSuccess}
        onError={handlePaymentError}
      />
    </div>
  );
}

ReactDOM.render(<PayDesign />, document.getElementById('root'));
