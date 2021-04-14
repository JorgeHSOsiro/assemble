import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

const favoriteCharacter = (name) => api.post('/character', { name });

export default {
  favoriteCharacter,
};
