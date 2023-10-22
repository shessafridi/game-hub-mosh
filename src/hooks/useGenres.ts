import { useQuery } from '@tanstack/react-query';

import genresData from '../data/genres';
import { FetchResponse } from '../models/fetch-response';
import { Genre } from '../models/genre';
import ApiClient from '../services/api-client';

const apiClient = new ApiClient<Genre>('/genres');

const useGenres = () =>
  useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    staleTime: 60 * 1000 * 60 * 24,
    initialData: {
      count: genresData.length,
      results: genresData,
    } as FetchResponse<Genre>,
  });

export default useGenres;
