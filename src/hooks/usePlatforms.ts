import { useQuery } from '@tanstack/react-query';

import platformsData from '../data/platforms';
import { FetchResponse } from '../models/fetch-response';
import { Platform } from '../models/game';
import apiClient from '../services/api-client';

const usePlatforms = () =>
  useQuery({
    queryKey: ['platforms'],
    queryFn: ({ signal }) =>
      apiClient
        .get<FetchResponse<Platform>>('/platforms/lists/parents', { signal })
        .then(res => res.data),
    staleTime: 60 * 1000 * 60 * 24,
    initialData: { count: platformsData.length, results: platformsData },
  });

export default usePlatforms;
