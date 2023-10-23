import { Grid, GridItem, Show } from '@chakra-ui/react';

import GameGrid from '../components/GameGrid';
import GenreList from '../components/GenreList';

type Props = {};

function HomePage({}: Props) {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr',
      }}
    >
      <Show above='lg'>
        <GridItem area='aside' paddingX={5}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area='main'>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default HomePage;
