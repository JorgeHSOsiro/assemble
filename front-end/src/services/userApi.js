import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

const login = (email, password) => api.post('/login', { email, password });
const register = (name, email, password) => api.post('/register', {
  name, email, password,
});

export default {
  login,
  register,
};
