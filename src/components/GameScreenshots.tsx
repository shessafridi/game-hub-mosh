import { Image, SimpleGrid, Spinner } from '@chakra-ui/react';

import { useScreenshots } from '../hooks/useScreenshots';

type Props = { gameId: number };

function GameScreenshots({ gameId }: Props) {
  const { data: screenshots, isLoading, error } = useScreenshots(gameId);

  if (isLoading) return <Spinner />;
  if (error || !screenshots) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} gap='5' mt='5'>
      {screenshots.results.map(screenshot => (
        <Image src={screenshot.image} />
      ))}
    </SimpleGrid>
  );
}

export default GameScreenshots;
