import { useEffect, useState } from 'react';

import { Game } from '../models/game';
import { GameQuery } from '../models/game-query';
import useData from './useData';

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    '/games',
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
      },
    },
    [gameQuery]
  );
export default useGames;
