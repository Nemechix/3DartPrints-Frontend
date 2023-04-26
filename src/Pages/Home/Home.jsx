import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import "./Home.css"

export default function MultiActionAreaCard() {
  return (
    <main>
      <div className="popular_categories">
        <Card sx={{ maxWidth: 100, maxHeight: 100, borderRadius: "100%" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://www.bbva.ch/wp-content/uploads/2021/10/27-.-La-industria-de-la-impresion-3D-1.png"
              alt="test"
            />
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 100, maxHeight: 100, borderRadius: "100%" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://www.bbva.ch/wp-content/uploads/2021/10/27-.-La-industria-de-la-impresion-3D-1.png"
              alt="test"
            />
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 100, maxHeight: 100, borderRadius: "100%" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://www.bbva.ch/wp-content/uploads/2021/10/27-.-La-industria-de-la-impresion-3D-1.png"
              alt="test"
            />
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 100, maxHeight: 100, borderRadius: "100%" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://www.bbva.ch/wp-content/uploads/2021/10/27-.-La-industria-de-la-impresion-3D-1.png"
              alt="test"
            />
          </CardActionArea>
        </Card>
      </div>
      <div className="p_container">
        <h1 className="welcome">Bienvenido</h1>
        <p className="p_home">
          Bienvenidos a nuestra plataforma de impresión 3D, donde los usuarios
          pueden compartir sus diseños creativos y otros pueden comprarlos para
          imprimirlos. Nos enorgullece brindar un espacio de intercambio para
          diseñadores y amantes de la impresión 3D, ofreciendo una experiencia
          única para aquellos que no tienen una impresora 3D en casa. ¿Eres un
          diseñador creativo? ¡Sube tus diseños y comienza a ganar dinero! ¿Eres
          un apasionado de la impresión 3D? ¡Compra diseños únicos y conviértete
          en un creador! ¿No tienes una impresora 3D? No hay problema. Encuentra
          a alguien cerca de ti que tenga una impresora 3D y haz que tus diseños
          cobren vida. ¡Únete a nuestra comunidad hoy y descubre un mundo de
          posibilidades creativas!
        </p>
      </div>
    </main>
  );
}
