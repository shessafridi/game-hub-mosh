import { Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { FetchGamesResponse } from '../models/fetch-games-response';
import { Game } from '../models/game';
import apiClient from '../services/ali-client';

type Props = {};

function GameGrid({}: Props) {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>('/games')
      .then(res => setGames(res.data.results))
      .catch(err => setError(err.message));
  }, []);

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map(game => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
}

export default GameGrid;
