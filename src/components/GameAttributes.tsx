import { SimpleGrid, Text } from '@chakra-ui/react';

import { GameWithDetails } from '../hooks/useGame';
import CriticScore from './CriticScore';
import DefinitionItem from './DefinitionItem';

type Props = {
  game: GameWithDetails;
};

function GameAttributes({ game }: Props) {
  return (
    <SimpleGrid mt='5' columns={2} as='dl'>
      <DefinitionItem label='Platforms'>
        {game.parent_platforms.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem label='Metascore'>
        <CriticScore score={game.metacritic} />
      </DefinitionItem>
      <DefinitionItem label='Genres'>
        {game.genres.map(genre => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem label='Publishers'>
        {game.publishers.map(publisher => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </DefinitionItem>
    </SimpleGrid>
  );
}

export default GameAttributes;
