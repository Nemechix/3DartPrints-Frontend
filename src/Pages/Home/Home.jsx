import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from "@mui/material";
import Typography from '@mui/material/Typography';
import "./Home.css"


export default function MultiActionAreaCard() {
  return (
    <main>
      <h3 className="h3_home">Visita nuestras categorías populares</h3>
      <div className="popular_categories">
        <Card className="card" sx={{ width: "45%", height: 200, marginBottom: "20px" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://www.garrigues.com/sites/default/files/impresion_3d_al_rescate_del_clima.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Categoria
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ width: "45%", height: 200 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://www.garrigues.com/sites/default/files/impresion_3d_al_rescate_del_clima.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Categoria
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ width: "45%", height: 200 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://www.garrigues.com/sites/default/files/impresion_3d_al_rescate_del_clima.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Categoria
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ width: "45%", height: 200 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://www.garrigues.com/sites/default/files/impresion_3d_al_rescate_del_clima.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Categoria
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ width: "45%", height: 200, marginBottom: "20px" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://www.garrigues.com/sites/default/files/impresion_3d_al_rescate_del_clima.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Categoria
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ width: "45%", height: 200, marginBottom: "20px" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://www.garrigues.com/sites/default/files/impresion_3d_al_rescate_del_clima.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Categoria
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>

      <div className="parrafos_title">
        <div className="p_container">
          <div className="about_title">
            <h1 className="welcome">¿Como se creo 3DartPrins?</h1>
            <a href="/about">Conoce nuestros inicios </a>
          </div>
          <div className="parrafos">
          <div className="parrafo1">
            <h2>Conviértete en un creador de impresión 3D</h2>
            <p>Bienvenidos a nuestra plataforma de impresión 3D, donde conectamos a diseñadores creativos con apasionados de la impresión 3D. Ofrecemos una experiencia única para aquellos que buscan imprimir diseños creativos sin tener que invertir en una impresora 3D. Si eres un diseñador, sube tus diseños y comienza a ganar dinero. Si eres un amante de la impresión 3D, encuentra diseños únicos y conviértete en un creador.</p>
          </div>

          <div className="parrafo2">
            <h2>Una comunidad de diseño único y creativo</h2>
            <p>En nuestra comunidad, fomentamos el intercambio de ideas y la creatividad. Cada diseño en nuestra plataforma es único y tiene su propia historia detrás. Desde juguetes personalizados hasta joyería única, nuestra plataforma tiene algo para todos. Además, ofrecemos una opción conveniente para aquellos que no tienen una impresora 3D en casa, lo que les permite dar vida a sus diseños.</p>
          </div>

          <div className="parrafo3">
            <h2>Explora el mundo de la impresión 3D</h2>
            <p>Nuestra plataforma es el lugar ideal para explorar el mundo de la impresión 3D. Ofrecemos una amplia gama de diseños, desde lo más sencillo hasta lo más complejo. Además, nuestra comunidad está llena de apasionados de la impresión 3D que están dispuestos a compartir sus conocimientos y experiencia contigo. Únete a nuestra comunidad hoy y descubre un mundo de posibilidades creativas. que titulo le podria poner a cada parrafo.</p>
          </div>
          </div>
        </div>
      </div>
    </main>
  );
}
