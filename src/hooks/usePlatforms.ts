import ms from 'ms';

import { useQuery } from '@tanstack/react-query';

import platformsData from '../data/platforms';
import { Platform } from '../models/game';
import ApiClient from '../services/api-client';

const apiClient = new ApiClient<Platform>('/platforms/lists/parents');

const usePlatforms = () =>
  useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
    initialData: platformsData,
  });

export default usePlatforms;
