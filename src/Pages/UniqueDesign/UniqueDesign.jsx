import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import getDesignById from '../../Services/getDesignById';

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
    console.log('Artículo agregado al carrito');
  };

  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <img style={{paddingTop: '20px', width: '80vw', borderRadius: '10px'}} src={design.image} alt={design.name} />
      <h1 style={{marginTop: '20px'}}>{design.price}€</h1>
      <h3>{design.name}</h3>
      <p>{design.description}</p>
      <button style={{marginTop: '20px',marginBottom:"15px"}} onClick={addToCart}>Añadir al carrito</button>
    </div>
  );
}

export default UniqueDesign;
