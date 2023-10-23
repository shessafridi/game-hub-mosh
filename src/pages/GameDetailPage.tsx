import { useParams } from 'react-router-dom';

import { Heading, Spinner } from '@chakra-ui/react';

import ExpanableText from '../components/ExpanableText';
import GameAttributes from '../components/GameAttributes';
import GameTrailer from '../components/GameTrailer';
import { useGame } from '../hooks/useGame';

export function GameDetailPage() {
  const { slug } = useParams();

  const { data: game, error, isLoading } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpanableText>{game.description_raw}</ExpanableText>

      <GameAttributes game={game} />

      <GameTrailer gameId={game.id} />
    </>
  );
}
