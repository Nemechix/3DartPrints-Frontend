import React, { useState } from 'react';
import './CartFrame.css';

function CartFrame() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
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
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - {item.price}{' '}
              <button onClick={() => removeFromCart(item)}>Borrar</button>

            </li>
          ))}
        </ul>
      )}
      <button onClick={() => addToCart(item)}>Añadir</button>
      <hr />
      <div>
      <br></br>
      </div>
      <p>Total: {cartItems.reduce((acc, item) => acc + item.price, 0)}</p>
      <button>Pagar</button>
      </form>
    </div>
  );
}

export default CartFrame;
