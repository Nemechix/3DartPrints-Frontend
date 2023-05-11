import { useState } from "react";
import axios from "axios";
import { CloudinaryContext, Image, Transformation } from "cloudinary-react";

const UploadDesignForm = () => {
const [name, setName] = useState("");
const [description, setDescription] = useState("");
/* const [file, setFile] = useState(null);
 */const [image, setImage] = useState({});
const [price, setPrice] = useState(0);
const [quantity, setQuantity] = useState(1);
const [categoryName, setCategoryName] = useState("");




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
      const response = await axios.post(
        "https://threedartprints-2yqk.onrender.com/api/design",
        designData,
        {
          headers: {
            token: token,
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <br />
      <label>
        Descripción:
        <textarea
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </label>
      <br />
      <label>
        Imagen:
      </label>
      <br />
      <CloudinaryContext cloudName="tu-nombre-de-cloudinary">
        <div>
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
      <br />
      <label>
        Precio:
        <input
          type="number"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />
      </label>
      <br />
      <label>
        Cantidad:
        <input
          type="number"
          value={quantity}
          onChange={(event) => setQuantity(event.target.value)}
        />
      </label>
      <br />
      <label>
        Categoría:
        <input
          type="text"
          value={categoryName}
          onChange={(event) => setCategoryName(event.target.value)}
        />
      </label>
      <br />
      <button type="submit">Subir diseño</button>
    </form>
  );
};

export default UploadDesignForm;
