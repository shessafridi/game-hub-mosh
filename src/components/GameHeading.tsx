import { Heading } from '@chakra-ui/react';

import useGameQueryStore from '../hooks/useGameQueryStore';
import { useGenre } from '../hooks/useGenre';
import { usePlatform } from '../hooks/usePlatform';

function GameHeading() {
  const platformId = useGameQueryStore(s => s.gameQuery.platformId);
  const genreId = useGameQueryStore(s => s.gameQuery.genreId);

  const selectedPlatform = usePlatform(platformId);
  const selectedGenre = useGenre(genreId);

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
