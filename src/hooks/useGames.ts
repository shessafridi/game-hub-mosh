import { CanceledError } from 'axios';
import { useEffect, useState } from 'react';

import { FetchGamesResponse } from '../models/fetch-games-response';
import { Game } from '../models/game';
import apiClient from '../services/ali-client';

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchGamesResponse>('/games', { signal: controller.signal })
      .then(res => setGames(res.data.results))
      .catch(err => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { games, error };
};
export default useGames;
