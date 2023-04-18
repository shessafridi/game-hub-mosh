import { SimpleGrid, Text } from '@chakra-ui/react';

import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardContainer from './GameCardContainer';
import GameCardSkeleton from './GameCardSkeleton';

type Props = {};

function GameGrid({}: Props) {
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}

      <SimpleGrid
        padding={'10px'}
        columns={{
          base: 1,
          md: 2,
          lg: 3,
          xl: 5,
        }}
        spacing={10}
      >
        {isLoading &&
          skeletons.map(id => (
            <GameCardContainer key={id}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {!isLoading &&
          games.map(game => (
            <GameCardContainer key={game.id}>
              <GameCard game={game} />
            </GameCardContainer>
          ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
