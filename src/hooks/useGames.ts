import { useQuery } from '@tanstack/react-query';

import { FetchResponse } from '../models/fetch-response';
import { Game } from '../models/game';
import { GameQuery } from '../models/game-query';
import apiClient from '../services/api-client';

const useGames = (gameQuery: GameQuery) => {
  return useQuery({
    queryKey: ['games', gameQuery],
    queryFn: ({ signal }) =>
      apiClient
        .get<FetchResponse<Game>>('/games', {
          params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText,
          },
          signal,
        })
        .then(res => res.data),
    staleTime: 60 * 1000,
  });
};

export default useGames;
