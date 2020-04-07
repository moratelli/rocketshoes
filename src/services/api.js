import axios from 'axios';

const api = axios.create({
  baseURL: 'https://moratelli-rocketshoes-api.herokuapp.com',
});

export default api;
