import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'ee77769293d349e5a29bd9e8e15cdf79',
  },
});
