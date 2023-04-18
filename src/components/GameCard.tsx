import { Card, CardBody, Heading, Image } from '@chakra-ui/react';

import { Game } from '../models/game';
import PlatformIconList from './PlatformIconList';

type GameCardProps = {
  game: Game;
};

function GameCard({ game }: GameCardProps) {
  return (
    <Card overflow='hidden' borderRadius={10}>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize={'2xl'}>{game.name}</Heading>
        <PlatformIconList
          platforms={game.parent_platforms.map(p => p.platform)}
        />
      </CardBody>
    </Card>
  );
}

export default GameCard;
