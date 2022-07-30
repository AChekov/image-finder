import axios from 'axios';

const API_KEY = '27846250-3afc119c8c7bb9bcb017e0724';
axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
  key: API_KEY,
  orientation: 'horizontal',
  image_type: 'photo',
  per_page: 12,
};

export const fetchImages = async (query, page) => {
  const { data } = await axios.get(`?q=${query}&page=${page}`);
  return data;
};

export default fetchImages;
