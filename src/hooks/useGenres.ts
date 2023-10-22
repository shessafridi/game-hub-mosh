import { useQuery } from '@tanstack/react-query';

import genresData from '../data/genres';
import { FetchResponse } from '../models/fetch-response';
import { Genre } from '../models/genre';
import apiClient from '../services/api-client';

const useGenres = () =>
  useQuery({
    queryKey: ['genres'],
    queryFn: ({ signal }) =>
      apiClient
        .get<FetchResponse<Genre>>('/genres', { signal })
        .then(res => res.data),
    staleTime: 60 * 1000 * 60 * 24,
    initialData: { count: genresData.length, results: genresData },
  });

export default useGenres;
