import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getDesignsByCategoryName from '../../Services/DesignsByCategory';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useMediaQuery } from '@mui/material';
import { CardActionArea } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../Context/appContext';

function Favorites() {
    const { name, userId } = useParams();
    const { favorites, addToFavorites, removeFromFavorites } = useAppContext()
    console.log(name)

    const favoritesChecker = (id) => {
        const boolean = favorites.some((design) => design.id === id)
        return boolean
    }

    console.log('favorites are ', favorites)
    const [designs, setDesigns] = useState([]);
    const navigate = useNavigate()
    const isMobile = useMediaQuery('(max-width:1024px)');



    useEffect(() => {
        async function fetchData() {
            const response = await getDesignsByCategoryName(name);
            setDesigns(response);
        }
        fetchData();
    }, [name]);

    const addToCart = (design) => { };



    return (
        <>
            <div className="popular_categories">
                {favorites.length > 0 ? favorites.map((design) => (
                    <Card
                        key={design.id}
                        className="card"
                        sx={{
                            width: "45%",
                            height: "280px",
                            marginBottom: "20px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between"
                        }}
                    >
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height={isMobile ? "185" : "240vw"}
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
                                flexDirection: isMobile ? "column" : "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                                padding: "1rem"
                            }}
                        >
                            <Typography fontFamily={'Secular One'} gutterBottom variant="h5" component="div" style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden", width: "100%", fontSize: isMobile ? '1rem' : '1.08rem', marginRight: isMobile ? 0 : "1rem", marginBottom: "0px" }}>
                                {design.name}
                            </Typography>
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                <Typography variant="body1" color="text.secondary" sx={{ marginRight: "" }}>
                                    {`$${design.price}`}
                                </Typography>
                                <div style={{ display: "flex", marginLeft: "px" }}>
                                    {favoritesChecker(design.id) ?
                                        <IconButton aria-label="remove to favorites" onClick={() => removeFromFavorites(design.id)}>
                                            <FavoriteIcon sx={{ color: 'pink' }} />
                                        </IconButton>
                                        :
                                        <IconButton aria-label="Add to favorites" onClick={() => addToFavorites(design)}>
                                            <FavoriteIcon />
                                        </IconButton>
                                    }

                                    <IconButton aria-label="Add to cart" >
                                        <ShoppingCartIcon />
                                    </IconButton>
                                </div>
                            </Box>
                        </div>
                    </Card>
                )) : <h1>You dont have any favs yet</h1>}
            </div>
        </>
    );



}

export default Favorites