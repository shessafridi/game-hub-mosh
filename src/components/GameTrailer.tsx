import { Spinner } from '@chakra-ui/react';

import { useTrailers } from '../hooks/useTrailers';

type Props = { gameId: number };

function GameTrailer({ gameId }: Props) {
  const { data: trailers, isLoading, error } = useTrailers(gameId);

  if (isLoading) return <Spinner />;

  if (error || !trailers) throw error;

  const first = trailers.results[0];

  if (!first?.data?.max) return null;

  return <video src={first.data.max} controls poster={first.preview} />;
}

export default GameTrailer;
