import api from './config';

export const getCartTotal = async () => {
  const response = await api.get(`cartTotal`);
  const data = await response.json();
  return data.total;
};

export const addToCart = async (item) => {
  const response = await api.post(`addToCart`, { item });
  const data = await response.json();
  return data.result;
};
