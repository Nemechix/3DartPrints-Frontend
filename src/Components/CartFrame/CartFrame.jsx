import React, { useState } from 'react';
import './CartFrame.css';

function CartFrame() {
  const [cartItems, setCartItems] = useState([]);
  }

  const handleAddToCart = (design) => {
    const product = {
      id: cartItems.length + 1,
      name: '3D Model',
      price,
      printer,
    };

  const removeFromCart = (product) => {
    const newCartItems = cartItems.filter((item) => item !== product);
    setCartItems(newCartItems);
  };

  return (
    <div className="cart-wrapper">
      <form>
        <h2>Carrito de compra:</h2>       <hr />
      {cartItems.length === 0 ? (
        <p>Tu carrito esta vacio.</p>
      ) : (
        <ul>
          {cartItems.map((design) => (
            <li key={design.id}>
              {design.name} - {design.price}{' '}
              {user.printer && <span> - Printed on {user.printer}</span>}
              <button onClick={() => removeFromCart(design)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <button onClick={() => handleAddToCart(design)}>Añadir</button>
      <hr />
      <div>
      <br></br>
      </div>
      <p>Total: {cartItems.reduce((acc, design) => acc + design.price, 0)}</p>
      <button>Checkout</button>
      </form>
    </div>
  );


export default CartFrame;
