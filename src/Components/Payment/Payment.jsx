import React, { useState, useEffect } from 'react';
//import { PayPalButton } from "react-paypal-button-v2";
//import { baseURL } from '../../Services/config';

function Payment(props) {
  const [paid, setPaid] = useState(false);
  const [error, setError] = useState(null);
  const [cartTotal, setCartTotal] = useState(0);
  const shippingCost = 10;
  const taxRate = 0.15;
  const taxAmount = props.cartTotal * taxRate;
  const total = props.cartTotal + shippingCost + taxAmount;


  // obtenemos el ID del cliente, y su campo paypalID, para el pago
  const [userClient, setUserClient] = useState("");

  useEffect(() => {
    const fetchCartTotal = async () => {
      const response = await fetch(`${baseURL}/cartTotal`);
      const data = await response.json();
      setCartTotal(data.total);
    };
    fetchCartTotal();
  
    const fetchUserClient = async () => {
      try {
        const response = await fetch(`${baseURL}/users/${userId}`);
        const data = await response.json();
        setUserClient(data.paypalClientId);
      } catch (error) {
        console.error(error);
        setError(error);
      }
    };
    fetchUserClient();
  }, []);

  const onSuccess = (details, data) => {
    console.log("Transaction completed by " + details.payer.name.given_name);
    // Aquí puedes enviar la información del pago al servidor y actualizar la base de datos
    setPaid(true);
  };

  const onError = (error) => {
    console.error("Error occurred:", error);
    setError(error);
  };

  const handleCheckout = () => {
    const confirmed = window.confirm('¿Estás seguro de que deseas finalizar la compra?');
    if (confirmed) {
      onSuccess();
    }
  };

  return (
    <div>
      <h3>Resumen de pedido:</h3>
      <p>Subtotal: ${cartTotal.toFixed(2)}</p>
      <p>Envío: ${shippingCost.toFixed(2)}</p>
      <p>Impuestos: ${taxAmount.toFixed(2)}</p>
      <hr />
      <p>Total: ${total.toFixed(2)}</p>
      <button onClick={handleCheckout}>Finalizar Compra</button>
      {!paid && (
        <PayPalButton
          amount={total.toFixed(2)}
          onSuccess={onSuccess}
          onError={onError}
          options={{
            clientId: userClient,
            currency: "EUR",
          }}
          
        />
      )}
      {paid && <p>¡Pago completado con éxito!</p>}
      {error && <p>Ocurrió un error al procesar el pago.</p>}
    </div>
  );
}

export default Payment