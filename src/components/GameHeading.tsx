import { Heading } from '@chakra-ui/react';
import React from 'react';

import { GameQuery } from '../models/game-query';

type GameHeadingProps = {
  gameQuery: GameQuery;
};

function GameHeading({ gameQuery }: GameHeadingProps) {
  const heading = [gameQuery.platform?.name, gameQuery.genre?.name, 'Games']
    .filter(Boolean)
    .join(' ');
  return (
    <Heading as='h1' marginY={5} fontSize='5xl'>
      {heading}
    </Heading>
  );
}

export default GameHeading;
