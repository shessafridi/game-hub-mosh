import { useInfiniteQuery } from '@tanstack/react-query';

import { FetchResponse } from '../models/fetch-response';
import { Game } from '../models/game';
import { GameQuery } from '../models/game-query';
import ApiClient from '../services/api-client';

const apiClient = new ApiClient<Game>('/games');

const useGames = (gameQuery: GameQuery) => {
  return useInfiniteQuery<FetchResponse<Game>>({
    queryKey: ['game', gameQuery],
    queryFn: ({ pageParam, signal }) =>
      apiClient.getAll({
        signal,
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) =>
      lastPage.next ? allPages.length + 1 : null,
    initialPageParam: null,
    staleTime: 60 * 1000,
  });
};

export default useGames;
