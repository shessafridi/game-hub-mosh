import { useQuery } from '@tanstack/react-query';

import { Game } from '../models/game';
import { Publisher } from '../models/publisher';
import { Trailer } from '../models/trailer';
import ApiClient from '../services/api-client';

export type GameWithDetails = Game & {
  description_raw: string;
  publishers: Publisher[];
};

export const useTrailers = (slug: string | number) => {
  const apiClient = new ApiClient<Trailer>('/games/' + slug + '/movies');
  return useQuery({
    queryKey: ['games', slug, 'movies'],
    queryFn: ({ signal }) => apiClient.getAll({ signal }),
  });
};
