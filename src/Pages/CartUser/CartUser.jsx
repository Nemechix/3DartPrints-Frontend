import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getDesignsByCategoryName from '../../Services/DesignsByCategory';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from '@mui/material/Button';
import { useMediaQuery } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../Context/appContext';
import './CartUser.css'
import DeleteIcon from '@mui/icons-material/Delete';

function CartUser() {
  const { name } = useParams();
  const { cart, addToCart, removeFromCart } = useAppContext()
  const isMobile = useMediaQuery("(max-width:1024px)");


  const checkout = async () => {
    await fetch("http://localhost:3000/api/stripe/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: cart }),
    }).then((response) => {
      return response.json();
    }).then((response) => {
      if (response.url) {
        window.location.assign(response.url)
      }
    })
  }



  const cartChecker = (id) => {
    const boolean = cart.some((design) => design.id === id)
    return boolean
  }

  const [designs, setDesigns] = useState([]);
  const navigate = useNavigate()
  const [userId, setUserId] = useState(null);

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


  const addToFavorites = async (designId) => {
    if (!userId) {
      alert("Debes iniciar sesión para agregar a favoritos");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(`https://threedartprints-2yqk.onrender.com/api/design/favorites`, { designId, userId }, {
        headers: {
          'token': token
        }
      });
      return response;
    } catch (error) {
      console.error(error);
    }
  };




  return (
    <div className='cart_body_container' style={{ display: 'flex' }}>
      <div className='designCart_container' style={{}}>
        <h3 id='h3_my_cart'>MY CART</h3>
        <p id='p_cart'>{cart.length} articles</p>
        {cart.map((design) => {
          return (
            <div key={design.id} className="design_cart">
              <img
                onClick={function handleMenuItemClick() {
                  navigate(`/user/${design.userId}/designs/${design.id}`);
                }}
                className="design_cart_img"
                src={design.image}
                alt={design.name}
              />
              <div className="text_design">
                <p className="p_design">{design.name}</p>
                <span className="price_design">${design.price}</span>
              </div>
              <div
                style={{ display: "flex", alignItems: "flex-end" }}
              >
                <IconButton
                  sx={{}}
                  aria-label="remove to cart"
                  onClick={() => removeFromCart(design.id)}
                >
                  <DeleteIcon
                    sx={{
                      color: "black",
                      fontSize: isMobile ? "5vw" : "2vw",
                    }}
                  />
                </IconButton>
              </div>
            </div>
          );
        })}
      </div>
      <div className='resume_container'>
        <h4 style={{ marginTop: "8px", marginBottom: "0px" }}>Resume</h4>
        <p>
          Subtotal articles:{' '}
          <span style={{ fontSize: isMobile ? '20px' : "1.8vw", fontWeight: 'bold', float: "right" }}>
            ${cart.reduce((total, design) => total + design.price, 0).toFixed(2)}
          </span>
        </p>
        <Divider variant="middle" />
        <p>
          Total (taxes included):{' '}
          <span style={{ fontSize: isMobile ? '25px' : "2vw", fontWeight: 'bold', float: "right" }}>
            ${(cart.reduce((total, design) => total + design.price, 0) * 1.07).toFixed(2)}
          </span>
        </p>


        <Button
          sx={{
            width: '100%',
            height: "50px",
            boxShadow: "none",
            backgroundColor: "#ff7c24",
            '&:hover': {
              backgroundColor: '#fa6705',
              boxShadow: "none"
            }
          }}
          variant='contained'
          size='small'
          startIcon={<ShoppingCartIcon />}
          onClick={checkout}
        >
          Checkout
        </Button>

      </div>
    </div>
  );




}

export default CartUser