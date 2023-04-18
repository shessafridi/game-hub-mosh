import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'ee77769293d349e5a29bd9e8e15cdf79',
  },
});
export default apiClient;
