import axios from 'axios';

const addToFavorites = async (designId,token) => {
    try {
      const response = await axios.post(`https://threedartprints-2yqk.onrender.com/design/designs/${designId}/favorites`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };
  

export default addToFavorites