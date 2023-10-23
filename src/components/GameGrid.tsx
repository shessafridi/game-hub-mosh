import { Fragment } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import { Flex, SimpleGrid, Spinner, Text } from '@chakra-ui/react';

import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardContainer from './GameCardContainer';
import GameCardSkeleton from './GameCardSkeleton';

function GameGrid() {
  const { data, error, isLoading, fetchNextPage, hasNextPage } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error?.message}</Text>;

  const fetchedGamesCount =
    data?.pages.reduce((acc, curr) => curr.results.length + acc, 0) || 0;

  return (
    <InfiniteScroll
      dataLength={fetchedGamesCount}
      hasMore={hasNextPage}
      next={fetchNextPage}
      loader={
        <Flex w='100%' justify='center'>
          <Spinner my='4' />
        </Flex>
      }
      pullDownToRefresh
      pullDownToRefreshThreshold={50}
      pullDownToRefreshContent={
        <Text align='center' my='3'>
          &#8595; Pull down to refresh
        </Text>
      }
      releaseToRefreshContent={
        <Text align='center' my='3'>
          &#8593; Release to refresh
        </Text>
      }
      refreshFunction={fetchNextPage}
    >
      <SimpleGrid
        padding='10px'
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
    </InfiniteScroll>
  );
}

export default GameGrid;
