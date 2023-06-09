import { useState } from "react";
import axios from "axios";
import { CloudinaryContext, Image, Transformation } from "cloudinary-react";
import {
  TextField,
  Button,
  Grid,
  Typography,
  CircularProgress,
} from "@mui/material";
import api from "../../Services/config";
import { Snackbar, SnackbarContent } from "@mui/material";


const UploadDesignForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState({});
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [categoryName, setCategoryName] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleImageInputChange = (event) => {
    const imageFile = event.target.files[0];
    const formData = new FormData();
    formData.append("file", imageFile);
    formData.append("upload_preset", "ituduwle");

    axios
      .post("https://api.cloudinary.com/v1_1/dqre3kwcf/image/upload", formData)
      .then((response) => {
        console.log(response.data);
        setImage(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);

    const designData = {
      name: name,
      description: description,
      image: image.url,
      file: "123",
      price: price,
      quantity: quantity,
      categoryName: categoryName,
    };

    try {
      const token = localStorage.getItem("token");
      console.log(designData);
      const response = await api.post(
        `/design`,
        designData,
        {
          headers: {
            token: token,
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.data);
      setSuccess(true);
      setSnackbarMessage("¡El diseño se ha subido exitosamente!");
    setSnackbarOpen(true);
    setLoading(false);
  } catch (error) {
    setSnackbarMessage("¡Hubo un error al subir el diseño!");
    setSnackbarOpen(true);
    setLoading(false);
  }
};


  return (
    <Grid container spacing={5} justifyContent="center">
      <Grid item xs={12}>
      </Grid>
      <Grid item xs={8}>
        <form style={{ marginBottom: "40px", backgroundColor: "white", border: "1px solid lightgray", boxShadow: "none", paddingTop: "30px" }} onSubmit={handleSubmit}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Nombre"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Precio"
                type="number"
                value={price}
                onChange={(event) => setPrice(event.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Descripción"
                multiline
                rows={4}
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <CloudinaryContext cloudName="tu-nombre-de-cloudinary">
                <div>
                  <label>Imagen:</label>
                  <input type="file" onChange={handleImageInputChange} />
                </div>
                {image && (
                  <div>
                    <Image publicId={image.public_id}>
                      <Transformation width="200" crop="scale" />
                    </Image>
                  </div>
                )}
              </CloudinaryContext>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Cantidad"
                type="number"
                value={quantity}
                onChange={(event) => setQuantity(event.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Categoría"
                value={categoryName}
                onChange={(event) => setCategoryName(event.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              {loading ? (
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <CircularProgress />
                </div>
              ) : (
                <Button
                  style={{
                    backgroundColor: "#ff7c24",
                    boxShadow: "none",
                    borderRadius: "25px",
                    "&:hover": {
                      backgroundColor: "#e86217"
                    }
                  }}
                  variant="contained"
                  type="submit"
                  fullWidth
                >
                  Subir diseño
                </Button>
              )}
            </Grid>
          </Grid>
        </form>

        <Snackbar
  open={snackbarOpen}
  autoHideDuration={3000}
  onClose={() => setSnackbarOpen(false)}
  style={{ width: "500px", height: "80px" }}
>
  <SnackbarContent
    message={snackbarMessage}
    action={
      <Button color="inherit" size="small" onClick={() => setSnackbarOpen(false)}>
        Cerrar
      </Button>
    }
  />
</Snackbar></Grid>
    </Grid>
  );

};

export default UploadDesignForm;
