import { CanceledError } from 'axios';
import { useEffect, useState } from 'react';

import { RawgResponse } from '../models/fetch-games-response';
import { Genre } from '../models/game';
import apiClient from '../services/api-client';

const useGenres = () => {
  const [genre, setGenre] = useState<Genre[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<RawgResponse<Genre>>('/genres', { signal: controller.signal })
      .then(res => {
        setGenre(res.data.results);
        setLoading(false);
      })
      .catch(err => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { genre, error, isLoading };
};
export default useGenres;
