import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import getDesignById from "../../Services/getDesignById";
import "./UniqueDesign.css";
import { IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import axios from "axios";
import GetMyProfile from "../../Services/GetMyProfile";

function UniqueDesign() {
  const [design, setDesign] = useState({});
  const [isFavorite, setIsFavorite] = useState(false);
  const { id } = useParams();
  const [userId, setUserId] = useState(null);

  const getDesign = async () => {
    const result = await getDesignById(id);
    setDesign(result.data);
    if (userId) {
      const favoritesResponse = await axios.get(
        `https://threedartprints-2yqk.onrender.com/api/user/favorites/${userId}`
      );
      const favorites = favoritesResponse.data;
      setIsFavorite(
        favorites.some((favorite) => favorite.designId === design.id)
      );
    }
  };

  useEffect(() => {
    async function getUserId() {
      const token = localStorage.getItem("token");
      const userData = await GetMyProfile(token);
      setUserId(userData.id);
    }
    getUserId();
    getDesign();
  }, [id, userId]);

  const addToFavorites = async (designId) => {
    if (!userId) {
      alert("Debes iniciar sesión para agregar a favoritos");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `https://threedartprints-2yqk.onrender.com/api/design/favorites`,
        { designId, userId },
        {
          headers: {
            token: token,
          },
        }
      );
      setIsFavorite(true);
      return response;
    } catch (error) {
      console.error(error);
    }
  };

  const removeFromFavorites = async (designId) => {
    if (!userId) {
      alert("Debes iniciar sesión para eliminar de favoritos");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      const response = await axios.delete(
        `https://threedartprints-2yqk.onrender.com/api/user/favorites`,
        {
          data: { designId, userId },
          headers: {
            token: token,
          },
        }
      );
      setIsFavorite(false);
      return response;
    } catch (error) {
      console.error(error);
    }
  };

  const addToCart = () => {
    console.log("Artículo agregado al carrito");
  };

  return (
    <div className="unique-design-container">
      <img
        className="unique-design-image"
        src={design.image}
        alt={design.name}
      />
      <div className="unique-design-details">
        <div>
          <IconButton
            aria-label="Add to favorites"
            onClick={() => {
              if (isFavorite) {
                removeFromFavorites(design.id);
                setIsFavorite(false);
              } else {
                addToFavorites(design.id);
                setIsFavorite(true);
              }
            }}
            sx={{ marginRight: "1rem", fontSize: "40px" }}
          >
            {isFavorite ? (
              <FavoriteIcon sx={{ color: "pink" }} />
            ) : (
              <FavoriteBorderIcon />
            )}
          </IconButton>
          <h1 className="unique-design-price">${design.price}</h1>
        </div>
        <h2 className="unique-design-name">{design.name}</h2>
        <p className="unique-design-description">{design.description}</p>
        <button className="unique-design-button" onClick={addToCart}>
          Añadir al carrito
        </button>
      </div>
    </div>
  );
}

export default UniqueDesign;
