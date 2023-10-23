import { useParams } from 'react-router-dom';

import { GridItem, Heading, SimpleGrid, Spinner } from '@chakra-ui/react';

import ExpanableText from '../components/ExpanableText';
import GameAttributes from '../components/GameAttributes';
import GameScreenshots from '../components/GameScreenshots';
import GameTrailer from '../components/GameTrailer';
import { useGame } from '../hooks/useGame';

export function GameDetailPage() {
  const { slug } = useParams();

  const { data: game, error, isLoading } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <SimpleGrid gap='5' columns={{ base: 1, md: 2 }}>
      <GridItem>
        <Heading>{game.name}</Heading>
        <ExpanableText>{game.description_raw}</ExpanableText>
        <GameAttributes game={game} />
      </GridItem>

      <GridItem>
        <GameTrailer gameId={game.id} />
        <GameScreenshots gameId={game.id} />
      </GridItem>
    </SimpleGrid>
  );
}
