import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import getDesignById from '../../Services/getDesignById';
import "./UniqueDesign.css"

function UniqueDesign() {
  const [design, setDesign ] = useState({});
  const {id} = useParams();

  const getDesign = async () => {
    const result = await getDesignById(id);
    setDesign(result.data);
  };

  useEffect(() => {
    getDesign();
  }, [id]);

  const addToCart = () => {
    // Aquí puedes agregar la lógica para agregar el artículo al carrito
    console.log('Artículo agregado al carrito');
  };

  return (
<div class="unique-design-container">
  <img class="unique-design-image" src={design.image} alt={design.name} />
  <div class="unique-design-details">
    <h1 class="unique-design-price">{design.price}€</h1>
    <h2 class="unique-design-name">{design.name}</h2>
    <p class="unique-design-description">{design.description}</p>
    <button class="unique-design-button" onClick={addToCart}>Añadir al carrito</button>
  </div>
</div>


  );
}

export default UniqueDesign;
