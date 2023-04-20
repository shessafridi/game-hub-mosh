import { SimpleGrid, Text } from '@chakra-ui/react';

import useGames from '../hooks/useGames';
import { GameQuery } from '../models/game-query';
import GameCard from './GameCard';
import GameCardContainer from './GameCardContainer';
import GameCardSkeleton from './GameCardSkeleton';

type GameGridProps = {
  gameQuery: GameQuery;
};

function GameGrid({ gameQuery }: GameGridProps) {
  const { data, error, isLoading } = useGames(gameQuery);
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
          xl: 4,
        }}
        spacing={6}
      >
        {isLoading &&
          skeletons.map(id => (
            <GameCardContainer key={id}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {!isLoading &&
          data.map(game => (
            <GameCardContainer key={game.id}>
              <GameCard game={game} />
            </GameCardContainer>
          ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
