import React, { useState, useEffect } from 'react';
import { baseURL } from '../../Services/config';
import './CartFrame.css';

function CartFrame() {
  const [cartItems, setCartItems] = useState([]);
  const [printer, setPrinter] = useState('');
  const [price, setPrice] = useState('');
  const [cartTotal, setCartTotal] = useState(0);

  const handleAddToCart = async (design) => {
    //llama la API para obtener la información del diseño
    const response = await fetch(`${baseURL}/design/${design.id}`);
    const designData = await response.json(); 

    // llamada a API = info de la impresora del usuario
    const userResponse = await fetch(`${baseURL}/users/${userId}`);
    const userData = await userResponse.json();
    const printer = userData.printer;
  
    // objeto producto, info + diseño + precio + impresora
    const product = {
      id: cartItems.length + 1,
      name: design.name,
      price: designData.price,
      printer,
      designId: design.id,
    };    
  
    // añadir producto al carrito
    setCartItems([...cartItems, product]);
  };
  
   // elimina producto carrito
  const removeFromCart = (product) => {
    const newCartItems = cartItems.filter((item) => item !== product);
    setCartItems(newCartItems);
  };

  useEffect(() => {
      // obtiene total del carrito
    const fetchCartTotal = async () => {
      const response = await fetch(`${baseURL}/cartTotal`);
      const data = await response.json();
      setCartTotal(data.total);
    };
    fetchCartTotal();
  }, []);
  
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
              <li key={design.id} className="cart-item">
                <span>{design.name}</span>
                <span>{design.price}</span>
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
          Impresora:
          <input type="text" value={printer} onChange={(e) => setPrinter(e.target.value)} />
        </label>
        <br />
        <button onClick={() => handleAddToCart(design)}>Añadir</button>
        <hr />
        <div>
          <br></br>
        </div>
        <p>Total: {cartItems.reduce((acc, design) => acc + parseFloat(design.price), 0)}</p>
        <button>Paso 2 - </button>
      </form>
    </div>
  );
}

export default CartFrame