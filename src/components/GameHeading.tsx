import { Heading } from '@chakra-ui/react';

import useGenres from '../hooks/useGenres';
import usePlatforms from '../hooks/usePlatforms';
import { GameQuery } from '../models/game-query';

type GameHeadingProps = {
  gameQuery: GameQuery;
};

function GameHeading({ gameQuery }: GameHeadingProps) {
  const { data: genres } = useGenres();
  const { data: platforms } = usePlatforms();

  const selectedGenre = genres.results.find(
    genre => genre.id === gameQuery.genreId
  );
  const selectedPlatform = platforms.results.find(
    platform => platform.id === gameQuery.platformId
  );

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
