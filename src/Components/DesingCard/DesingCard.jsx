import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getDesignsByCategoryName from '../../Services/DesignsByCategory';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Box from '@mui/material/Box';
import { useMediaQuery } from '@mui/material';
import { CardActionArea } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../Context/appContext';
import GetMyProfile from '../../Services/GetMyProfile';
import { addFavorite, removeFavorite } from '../../Services/favorites';


export default function DesignCard() {
  const { name } = useParams();
  const { cart, addToCart, removeFromCart } = useAppContext()


  const cartChecker = (id) => {
    const boolean = cart.some((design) => design.id === id)
    return boolean
  }


  const [designs, setDesigns] = useState([]);
  const navigate = useNavigate()
  const isMobile = useMediaQuery('(max-width:1024px)');
  const [userId, setUserId] = useState(null);

  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await getDesignsByCategoryName(name);
      setDesigns(response);
    }
    fetchData();
  }, [name]);

  useEffect(() => {
    async function getUserId() {
      const token = localStorage.getItem("token");
      const userData = await GetMyProfile(token);
      setUserId(userData.id);
    }
    getUserId();
  }, [])

  useEffect(() => {
    localStorage.getItem('favorites') ?
      setFavorites(JSON.parse(localStorage.getItem('favorites')))
      : localStorage.setItem('favorites', JSON.stringify([]))
  }, [localStorage.getItem('favorites')])

  const toggleFavorites = (designId) => {
    favorites.some(favorite => favorite.id === designId) ?
      removeFromFavorites(designId)
      : addToFavorites(designId)
  }

  const addToFavorites = async (designId) => {
    if (!userId) {
      alert("Debes iniciar sesión para agregar a favoritos");
      return;
    }

    try {

      const data = await addFavorite(designId, userId)
      
      console.log(data.message)
      setFavorites(data.favorites)
      localStorage.setItem('favorites', JSON.stringify(data.favorites))

      // return response;
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
      const data = await removeFavorite(designId, userId)

      console.log(data.message)
      setFavorites(data.favorites)
      localStorage.setItem('favorites', JSON.stringify(data.favorites))
      
      // return response;
    } catch (error) {
      console.error(error);
    }
  };
  


  return (
    <div className="designCards_body">
      <div className="popular_categories">
        {designs.map((design) => (
          <Card
            key={design.id}
            className="card"
            sx={{
              width: "45%",
              height: "280px",
              margin: "5px",
              marginBottom: "30px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: "none",
              border: "1px solid lightgray",
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height={isMobile ? "185" : "220vw"}
                image={design.image}
                alt={design.name}
                style={{ objectFit: "cover" }}
                onClick={function handleMenuItemClick() {
                  navigate(`/user/${design.userId}/designs/${design.id}`);
                }}
              />
            </CardActionArea>
            <div
              style={{
                display: "flex",
                flexDirection: isMobile ? "column" : "column",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "1rem",
              }}
            >
              <Typography
                fontFamily={"Roboto"}
                gutterBottom
                variant="h5"
                component="div"
                style={{
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  width: "100%",
                  fontSize: isMobile ? "1rem" : "1.08rem",
                  marginRight: isMobile ? 0 : "1rem",
                  marginBottom: "0px",
                }}
              >
                {design.name}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ marginRight: "" }}
                >
                  {`$${design.price}`}
                </Typography>
                <div style={{ display: "flex", marginLeft: "px" }}>
                  <IconButton
                    aria-label="Add to favorites"
                    onClick={() => toggleFavorites(design.id)}
                  >
                    <FavoriteIcon
                      sx={{
                        color: `${
                          favorites.some(
                            (favorite) => favorite.id === design.id
                          )
                            ? "#ff7c24"
                            : ""
                        }`,
                      }}
                    />
                  </IconButton>

                  {cartChecker(design.id) ? (
                    <IconButton
                      aria-label="remove to cart"
                      onClick={() => removeFromCart(design.id)}
                    >
                      <ShoppingCartIcon sx={{ color: "#6b53e6" }} />
                    </IconButton>
                  ) : (
                    <IconButton
                      aria-label="Add to cart"
                      onClick={() => addToCart(design)}
                    >
                      <ShoppingCartIcon />
                    </IconButton>
                  )}
                </div>
              </Box>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );



}
