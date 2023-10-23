import axios, { AxiosRequestConfig } from 'axios';

import FetchResponse from '../models/fetch-response';

const axiosInstance = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'ee77769293d349e5a29bd9e8e15cdf79',
  },
});

class ApiClient<T> {
  constructor(private endpoint: string) {}

  getAll = (config?: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then(res => res.data);
  };

  get = (id: string, config?: AxiosRequestConfig) => {
    return axiosInstance
      .get<T>(`${this.endpoint}/${id}`, config)
      .then(res => res.data);
  };
}

export default ApiClient;
