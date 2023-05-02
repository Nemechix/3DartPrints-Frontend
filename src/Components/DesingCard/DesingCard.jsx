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

export default function DesignCard() {
  const { name } = useParams();
  const [designs, setDesigns] = useState([]);
  const isMobile = useMediaQuery('(max-width:1024px)');

  useEffect(() => {
    async function fetchData() {
      const response = await getDesignsByCategoryName(name);
      setDesigns(response);
    }
    fetchData();
  }, [name]);

  const addToCart = (design) => { };

  const addToFavorites = (design) => { };
  return (
    <>
      <div className="popular_categories">
        {designs.map((design) => (
          <Card
            key={design.id}
            className="card"
            sx={{
              width: "45%",
              height: "260px",
              marginBottom: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between"
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height={isMobile ? "180" : "240vw"}
                image={design.image}
                alt={design.name}
                style={{ objectFit: "cover" }}
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
              <Typography fontFamily={'Secular One'} gutterBottom variant="h5" component="div" style={{ fontSize: isMobile ? '1rem' : '1.3rem', marginRight: isMobile ? 0 : "1rem" }}>
                {design.name}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                {!isMobile && (
                  <>
                    <IconButton aria-label="Add to cart" onClick={() => addToCart(design)}>
                      <ShoppingCartIcon />
                    </IconButton>
                    <IconButton aria-label="Add to favorites" onClick={() => addToFavorites(design)}>
                      <FavoriteIcon />
                    </IconButton>
                  </>
                )}
                <Typography variant="body1" color="text.secondary" sx={{ marginLeft: isMobile ? 0 : "1rem" }}>
                  {`$${design.price}`}
                </Typography>
                {isMobile && (
                  <>
                    <IconButton aria-label="Add to cart" onClick={() => addToCart(design)}>
                      <ShoppingCartIcon />
                    </IconButton>
                    <IconButton aria-label="Add to favorites" onClick={() => addToFavorites(design)}>
                      <FavoriteIcon />
                    </IconButton>
                  </>
                )}
              </Box>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
  
  
}
