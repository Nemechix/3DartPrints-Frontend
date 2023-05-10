import "./Home.css";
import { useState, useEffect } from "react";
//import getRandomCategory from "../../Services/GetRandomCategory";
import api from "../../Services/config";
import { Card, CardActionArea, CardMedia, Typography, useMediaQuery } from "@mui/material";
import {useNavigate } from "react-router-dom";
import { shuffle } from "lodash";

export default function MultiActionAreaCard() {
  const [categories, setCategories] = useState([]);
    const isMobile = useMediaQuery("(max-width:1024px)");
      const navigate = useNavigate();


    


useEffect(() => {
  async function fetchCategories() {
    const { data: allCategories } = await api.get(`/category`);
    const shuffledCategories = shuffle(allCategories);
    setCategories(shuffledCategories.slice(0, 4));
  }

  fetchCategories();
}, []);


  return (
    <main>
      <div>
        {" "}
        <img
          style={{ paddingTop: "35px", width: isMobile ? "350px" : "60vw" }}
          src="https://i.postimg.cc/59v7MnN7/coso-1.jpg"
          alt="img"
        />
      </div>
      <div className="popular_categories_home">
        {categories.map((category) => (
          <Card
            key={category.id}
            className="card"
            sx={{
              width: "45%",
              height: "180px",
              margin: "5px",
              marginBottom: "30px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: "none",
              border: "1px solid lightgray",
              color: "#6b53e6",
              textTransform: "uppercase",
              fontFamily: "Roboto",
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height={isMobile ? "130" : "160vw"}
                image={category.image}
                alt={category.name}
                style={{ objectFit: "cover" }}
                onClick={function handleMenuItemClick() {
                  navigate(`/category/${category.name}`);
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
                {category.name}
              </Typography>
            </div>
          </Card>
        ))}
      </div>

      <div className="parrafos_title">
        <div className="p_container">
          <div className="about_title">
            <h1 className="welcome">¿Cómo se creó 3DartPrins?</h1>
            <a href="/about">Conoce nuestros inicios </a>
          </div>
          <div className="parrafos">
            <div className="parrafo1">
              <h2>Conviértete en un creador de impresión 3D</h2>
              <p>
                Bienvenidos a nuestra plataforma de impresión 3D, donde
                conectamos a diseñadores creativos con apasionados de la
                impresión 3D. Ofrecemos una experiencia única para aquellos que
                buscan imprimir diseños creativos sin tener que invertir en una
                impresora 3D. Si eres un diseñador, sube tus diseños y comienza
                a ganar dinero. Si eres un amante de la impresión 3D, encuentra
                diseños únicos y conviértete en un creador.
              </p>
            </div>

            <div className="parrafo2">
              <h2>Una comunidad de diseño único y creativo</h2>
              <p>
                En nuestra comunidad, fomentamos el intercambio de ideas y la
                creatividad. Cada diseño en nuestra plataforma es único y tiene
                su propia historia detrás. Desde juguetes personalizados hasta
                joyería única, nuestra plataforma tiene algo para todos. Además,
                ofrecemos una opción conveniente para aquellos que no tienen una
                impresora 3D en casa, lo que les permite dar vida a sus diseños.
              </p>
            </div>

            <div className="parrafo3">
              <h2>Explora el mundo de la impresión 3D</h2>
              <p>
                Nuestra plataforma es el lugar ideal para explorar el mundo de
                la impresión 3D. Ofrecemos una amplia gama de diseños, desde lo
                más sencillo hasta lo más complejo. Además, nuestra comunidad
                está llena de apasionados de la impresión 3D que están
                dispuestos a compartir sus conocimientos y experiencia contigo.
                Únete a nuestra comunidad hoy y descubre un mundo de
                posibilidades creativas. que titulo le podria poner a cada
                parrafo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
