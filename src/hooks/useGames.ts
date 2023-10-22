import { useQuery } from '@tanstack/react-query';

import { Game } from '../models/game';
import { GameQuery } from '../models/game-query';
import ApiClient from '../services/api-client';

const apiClient = new ApiClient<Game>('/games');

const useGames = (gameQuery: GameQuery) => {
  return useQuery({
    queryKey: ['games', gameQuery],
    queryFn: ({ signal }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
        },
        signal,
      }),
    staleTime: 60 * 1000,
  });
};

export default useGames;
