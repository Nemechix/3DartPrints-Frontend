import React from 'react'
import CartFrame from '../../Components/CartFrame/CartFrame'

function ProductPage() {
  const [printer, setPrinter] = useState('');
  const [price, setPrice] = useState(0);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [image, setImage] = useState(null);

  const handlePrinterChange = (event) => {
    setPrinter(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleAddToCart = () => {
    const design = {
      id: cartItems.length + 1,
      name,
      price,
      printer,
      description,
      quantity,
      image,
    };
    addToCart(design);
  };

  function Cart() {
    return (
      <div>
        <h1>Product Page</h1>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <br />
        <label>
          Description:
          <input type="text" value={description} onChange={handleDescriptionChange} />
        </label>
        <br />
        <label>
          Image:
          <input type="file" onChange={handleImageChange} />
        </label>
        <br />
        <label>
          Printer:
          <input type="text" value={printer} onChange={handlePrinterChange} />
        </label>
        <br />
        <label>
          Price:
          <input type="number" value={price} onChange={handlePriceChange} />
        </label>
        <br />
        <label>
          Quantity:
          <input type="number" value={quantity} onChange={handleQuantityChange} />
        </label>
        <br />
        <button onClick={handleAddToCart}>Add to Cart</button>
        <br />
        <CartFrame />
      </div>
    );
  }
}

  export default ProductPage
