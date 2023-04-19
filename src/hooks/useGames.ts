import { CanceledError } from 'axios';
import { useEffect, useState } from 'react';

import { RawgResponse } from '../models/fetch-games-response';
import { Game } from '../models/game';
import apiClient from '../services/api-client';

const log = console.log;
const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<RawgResponse<Game>>('/games', { signal: controller.signal })
      .then(res => {
        setGames(res.data.results);
        setLoading(false);
      })
      .catch(err => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { games, error, isLoading };
};
export default useGames;