import { useState, useEffect } from "react";

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
    <div>
      <h1>Subir diseño</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Descripción:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Archivo:
          <input type="file" name="file" onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Imagen:
          <input type="file" name="image" onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Precio:
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Cantidad:
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>Categoría:</label>
        <br />
        <input
          type="text"
          name="categoryName"
          value={formData.categoryName}
          onChange={handleInputChange}
        />
        <br />
        <button type="submit">Subir diseño</button>
      </form>
    </div>
  );
}


export default UploadDesign;