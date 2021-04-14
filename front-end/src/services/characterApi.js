import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

const favoriteCharacter = (name) => api.post('/character', { name });
const getAllCharacters = () => api.get('/favorite/character');

export default {
  favoriteCharacter,
  getAllCharacters,
};
