import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

const favoriteComics = (title) => api.post('/comics', { title });

export default {
  favoriteComics,
};
