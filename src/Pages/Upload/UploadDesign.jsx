import { useState, useEffect } from "react";
import { Card, CardActions, CardContent, CardHeader, Divider, TextField, Typography } from '@mui/material';
import Button3D from "../../Components/Button/Button";

function UploadDesign() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    file: null,
    image: null,
    price: "",
    quantity: "",
    categoryName: "",
  });

  const [token, setToken] = useState("");

  useEffect(() => {
    // Obtener el token del usuario del almacenamiento local
    const userToken = localStorage.getItem("token");
    setToken(userToken);
  }, []);

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "file" ? target.files[0] : target.value;
    const name = target.name;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = new FormData();
    form.append("name", formData.name);
    form.append("description", formData.description);
    form.append("file", formData.file);
    form.append("image", formData.image);
    form.append("price", formData.price);
    form.append("quantity", formData.quantity);
    form.append("categoryName", formData.categoryName);

    const response = await fetch(
      "https://threedartprints-2yqk.onrender.com/api/design",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: form,
      }
    );

    if (response.ok) {
      // El diseño se subió exitosamente
      const data = await response.json();
      console.log(data.message);
    } else {
      // Hubo un error al subir el diseño
      const errorData = await response.json();
      console.error(errorData);
    }
  };
  return (
    <div className="register-wrapper">
  <Card
        className="card"
        sx={{ width: "700px", backgroundColor: "white" }}
        raised={true}
    >
  <CardHeader title="Subir diseño:"></CardHeader>
  <CardContent onSubmit={handleSubmit}>
    <TextField
      label="Nombre:"
      name="name"
      value={formData.name}
      onChange={handleInputChange}
      fullWidth={true}
      variant="outlined"
      margin="dense"
    />
    <br />
    <TextField
      label="Descripción:"
      name="description"
      value={formData.description}
      onChange={handleInputChange}
      fullWidth={true}
      variant="outlined"
      margin="dense"
      multiline
      rows={4}
    />
    <br />
    <TextField
      label="Archivo:"
      type="file"
      name="file"
      onChange={handleInputChange}
      fullWidth={true}
      variant="outlined"
      margin="dense"
    />
    <br />
    <TextField
      label="Imagen:"
      type="file"
      name="image"
      onChange={handleInputChange}
      fullWidth={true}
      variant="outlined"
      margin="dense"
    />
    <br />
    <TextField
      label="Precio:"
      type="number"
      name="price"
      value={formData.price}
      onChange={handleInputChange}
      fullWidth={true}
      variant="outlined"
      margin="dense"
    />
    <br />
    <TextField
      label="Cantidad:"
      type="number"
      name="quantity"
      value={formData.quantity}
      onChange={handleInputChange}
      fullWidth={true}
      variant="outlined"
      margin="dense"
    />
    <br />
    <TextField
      name="categoryName"
      value={formData.categoryName}
      onChange={handleInputChange}
      fullWidth={true}
      label="Categoría:"
      variant="outlined"
      margin="dense"
    />
        <Button3D variant="contained" color="primary" onClick={handleSubmit}>
      Subir diseño
    </Button3D>
    </CardContent>
    </Card>

</div>

  );
}


export default UploadDesign;