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
    


    const cartChecker = (id) => {
        const boolean = cart.some((design) => design.id === id)
        return boolean
    }
    console.log('cart are ', cart)


    const [designs, setDesigns] = useState([]);
    const navigate = useNavigate()
    const isMobile = useMediaQuery('(max-width:1024px)');
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
            <div className='designCart_container' style={{ flex: 1 }}>
                <h3 style={{fontSize:"40px"}} id='h3_my_cart'>My Cart</h3>
                <p style={{fontSize:"25px"}}>{cart.length} articles</p>
                {cart.map((design) => {
                    return (
                        <div className='design_cart'>
                            <img
                                className='design_cart_img'
                                src={design.image}
                                alt={design.name}
                            />
                            <div className='text_design'>
                                <h4 style={{ fontSize: '20px' }}>{design.name}</h4>
                                <span style={{ color: 'red', fontSize: '25px', fontWeight: 'bold' }}>
                                    ${design.price}
                                </span>
                                <IconButton sx={{ marginRight: "230px", marginTop:"25px" }} aria-label="remove to cart" onClick={() => removeFromCart(design.id)}>
                                    <DeleteIcon sx={{ color: 'black' }} />
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
                    <span style={{ fontSize: '25px', fontWeight: 'bold', float:"right" }}>
                        ${cart.reduce((total, design) => total + design.price, 0).toFixed(2)}
                    </span>
                </p>
                <Divider variant="middle" />
                <p>
                    Total (taxes included):{' '}
                    <span style={{ fontSize: '25px', fontWeight: 'bold',float:"right" }}>
                        ${(cart.reduce((total, design) => total + design.price, 0) * 1.15).toFixed(2)}
                    </span>
                </p>
    
                <Button
                    sx={{ width: '100%', height: "50px" }}
                    variant='contained'
                    size='small'
                    startIcon={<ShoppingCartIcon />}
                    onClick={() => navigate('/checkout')}
                >
                    Checkout
                </Button>
            </div>
        </div>
    );
    



}

export default CartUser