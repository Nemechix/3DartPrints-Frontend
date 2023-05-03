import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import getDesignById from '../../Services/getDesignById';
import "./UniqueDesign.css"
import { IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function UniqueDesign() {
  const [design, setDesign] = useState({});
  const [isFavorite, setIsFavorite] = useState(false);
  const { id } = useParams();

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

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="unique-design-container">
      <img className="unique-design-image" src={design.image} alt={design.name} />
      <div className="unique-design-details">
        <div>
        <IconButton aria-label="Add to favorites" onClick={toggleFavorite} sx={{ marginRight: "1rem", fontSize:"40px" }}>
          {isFavorite ? <FavoriteIcon sx={{ color: "pink" }} /> : <FavoriteBorderIcon />}
          </IconButton>
          <h1 className="unique-design-price">{design.price}€</h1>

        </div>
        <h2 className="unique-design-name">{design.name}</h2>
        <p className="unique-design-description">{design.description}</p>
        <button className="unique-design-button" onClick={addToCart}>Añadir al carrito</button>
      </div>
    </div>


  );
}

export default UniqueDesign;
