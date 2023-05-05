import axios from 'axios';

const removeFromFavorites = async (designId,token) => {
    try {
      const response = await axios.delete(`https://threedartprints-2yqk.onrender.com/design/designs/${designId}/favorites`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };
  

export default removeFromFavorites