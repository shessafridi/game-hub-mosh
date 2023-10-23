import { useQuery } from '@tanstack/react-query';

import Game from '../models/game';
import Publisher from '../models/publisher';
import ApiClient from '../services/api-client';

export type GameWithDetails = Game & {
  description_raw: string;
  publishers: Publisher[];
};

const apiClient = new ApiClient<GameWithDetails>('/games');

export const useGame = (slug: string) => {
  return useQuery({
    queryKey: ['games', slug],
    queryFn: ({ signal }) => apiClient.get(slug, { signal }),
  });
};
