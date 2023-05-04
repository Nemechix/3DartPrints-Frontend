import React, { useState, useEffect } from 'react';
//import { baseURL } from '../../Services/config';
import Payment from '../../Components/Payment/Payment';
import CartFrame from '../../Components/CartFrame/CartFrame'

  function Cart() {
    const [cartItems, setCartItems] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
      const fetchCartTotal = async () => {
        const response = await fetch(`${baseURL}/cartTotal`);
        const data = await response.json();
        setCartTotal(data.total);
      };
      fetchCartTotal();
    }, []);

    return (
      <div>
        <CartFrame />
        <Payment cartTotal={cartTotal} />
      </div>
    );
  }

  export default Cart
