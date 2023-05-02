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



export default function DesignCard() {
  const { name } = useParams();
  const [designs, setDesigns] = useState([]);
  const isMobile = useMediaQuery('(max-width:600px)');


  useEffect(() => {
    async function fetchData() {
      const response = await getDesignsByCategoryName(name);
      setDesigns(response);
    }
    fetchData();
  }, [name]);

  const addToCart = (design) => {};

  return (
    <div className="popular_categories">
      {designs.map((design) => (
                <Card className="card" sx={{ width: "45%", height: 200, marginBottom: "20px" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={design.image}
                    alt={design.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {design.name}
                    </Typography>

                  </CardContent>
                </CardActionArea>
              </Card>
      ))}
    </div>
  );
}
