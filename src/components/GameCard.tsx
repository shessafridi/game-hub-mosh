import { Card, CardBody, Heading, Image } from '@chakra-ui/react';
import React from 'react';

import { Game } from '../models/game';

type GameCardProps = {
  game: Game;
};

function GameCard({ game }: GameCardProps) {
  return (
    <Card overflow='hidden' borderRadius={10}>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize={'2xl'}>{game.name}</Heading>
      </CardBody>
    </Card>
  );
}

export default GameCard;
