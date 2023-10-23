import { useQuery } from '@tanstack/react-query';

import { Game } from '../models/game';
import ApiClient from '../services/api-client';

const apiClient = new ApiClient<Game & { description_raw: string }>('/games');

export const useGame = (slug: string) => {
  return useQuery({
    queryKey: ['games', slug],
    queryFn: ({ signal }) => apiClient.get(slug, { signal }),
  });
};
