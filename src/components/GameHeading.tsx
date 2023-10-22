import { Heading } from '@chakra-ui/react';

import { useGenre } from '../hooks/useGenre';
import { usePlatform } from '../hooks/usePlatform';
import { GameQuery } from '../models/game-query';

type GameHeadingProps = {
  gameQuery: GameQuery;
};

function GameHeading({ gameQuery }: GameHeadingProps) {
  const selectedPlatform = usePlatform(gameQuery.platformId);
  const selectedGenre = useGenre(gameQuery.genreId);

  const heading = [selectedPlatform?.name, selectedGenre?.name, 'Games']
    .filter(Boolean)
    .join(' ');

  return (
    <Heading as='h1' marginY={5} fontSize='5xl'>
      {heading}
    </Heading>
  );
}

export default GameHeading;
