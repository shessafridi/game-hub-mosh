import { useQuery } from '@tanstack/react-query';

import Screenshot from '../models/screenshot';
import ApiClient from '../services/api-client';

export const useScreenshots = (slug: string | number) => {
  const apiClient = new ApiClient<Screenshot>(
    '/games/' + slug + '/screenshots'
  );
  return useQuery({
    queryKey: ['games', slug, 'screenshots'],
    queryFn: ({ signal }) => apiClient.getAll({ signal }),
  });
};
