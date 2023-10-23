import ms from 'ms';

import { useInfiniteQuery } from '@tanstack/react-query';

import { FetchResponse } from '../models/fetch-response';
import { Game } from '../models/game';
import ApiClient from '../services/api-client';
import useGameQueryStore from './useGameQueryStore';

const apiClient = new ApiClient<Game>('/games');

const useGames = () => {
  const gameQuery = useGameQueryStore(s => s.gameQuery);

  return useInfiniteQuery<FetchResponse<Game>>({
    queryKey: ['game', gameQuery],
    queryFn: ({ pageParam, signal }) =>
      apiClient.getAll({
        signal,
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) =>
      lastPage.next ? allPages.length + 1 : null,
    initialPageParam: null,
    staleTime: ms('24h'),
  });
};

export default useGames;
