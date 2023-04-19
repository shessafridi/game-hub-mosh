import { CanceledError } from 'axios';
import { useEffect, useState } from 'react';

import { RawgResponse } from '../models/fetch-games-response';
import apiClient from '../services/api-client';

const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<RawgResponse<T>>(endpoint, { signal: controller.signal })
      .then(res => {
        setData(res.data.results);
        setLoading(false);
      })
      .catch(err => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { data, error, isLoading };
};
export default useData;
