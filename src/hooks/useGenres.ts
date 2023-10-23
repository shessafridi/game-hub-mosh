import ms from 'ms';

import { useQuery } from '@tanstack/react-query';

import genresData from '../data/genres';
import Genre from '../models/genre';
import ApiClient from '../services/api-client';

const apiClient = new ApiClient<Genre>('/genres');

const useGenres = () =>
  useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
    initialData: genresData,
  });

export default useGenres;
