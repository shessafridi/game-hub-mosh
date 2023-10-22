import { Fragment } from 'react';

import { Box, Button, SimpleGrid, Text } from '@chakra-ui/react';

import useGames from '../hooks/useGames';
import { GameQuery } from '../models/game-query';
import GameCard from './GameCard';
import GameCardContainer from './GameCardContainer';
import GameCardSkeleton from './GameCardSkeleton';

type GameGridProps = {
  gameQuery: GameQuery;
};

function GameGrid({ gameQuery }: GameGridProps) {
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error?.message}</Text>;

  return (
    <Box padding='10px'>
      <SimpleGrid
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
          data?.pages.map((page, pageIndex) => (
            <Fragment key={pageIndex}>
              {page?.results.map(game => (
                <GameCardContainer key={game.id}>
                  <GameCard game={game} />
                </GameCardContainer>
              ))}
            </Fragment>
          ))}
      </SimpleGrid>
      {!isLoading && hasNextPage && (
        <Button
          mt='6'
          mb='12'
          onClick={() => fetchNextPage()}
          disabled={isFetchingNextPage}
        >
          {isFetchingNextPage ? 'Loading...' : 'Load More'}
        </Button>
      )}
    </Box>
  );
}

export default GameGrid;
