import React, { useState } from 'react';
import './CartFrame.css';
import { baseURL } from '../../Services/config';

function CartFrame() {
  const [cartItems, setCartItems] = useState([]);
  const [printer, setPrinter] = useState('');
  const [price, setPrice] = useState('');

  const handleAddToCart = async (design) => {
    // Hacer una llamada a la API para obtener la información del diseño
    const response = await fetch(`${baseURL}/design/${design.id}`);
    const designData = await response.json(); 
  
    // objeto producto, infor + diseño + precio
    const product = {
      id: cartItems.length + 1,
      name: design.name,
      price: designData.price,
      printer,
      designId: design.id,
    };    
  
    // Añadir producto al carrito
    setCartItems([...cartItems, product]);
  };
  
   // Elimina producto carrito
  const removeFromCart = (product) => {
    const newCartItems = cartItems.filter((item) => item !== product);
    setCartItems(newCartItems);
  };
  
    return (
    <div className="cart-wrapper">
      <form>
        <h2>Carrito de compra:</h2>
        <hr />
        {cartItems.length === 0 ? (
          <p>Tu carrito esta vacio.</p>
        ) : (
          <ul>
            {cartItems.map((design) => (
              <li key={design.id}>
                {design.name} - {design.price} {' '}
                {design.printer && <span> - Printed on {design.printer}</span>}
                <button onClick={() => removeFromCart(design)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
        <label>
          Precio:
          <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
        </label>
        <br />
        <label>
          Printer:
          <input type="text" value={printer} onChange={(e) => setPrinter(e.target.value)} />
        </label>
        <br />
        <button onClick={() => handleAddToCart(design)}>Añadir</button>
        <hr />
        <div>
          <br></br>
        </div>
        <p>Total: {cartItems.reduce((acc, design) => acc + parseFloat(design.price), 0)}</p>
        <button>Checkout</button>
      </form>
    </div>
  );
}

export default CartFrame;
