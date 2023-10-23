import { useParams } from 'react-router-dom';

import { Heading, Spinner, Text } from '@chakra-ui/react';

import { useGame } from '../hooks/useGame';

type Props = {};

function GameDetailPage({}: Props) {
  const { slug } = useParams();

  const { data: game, error, isLoading } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <Text mt='4'>{game.description_raw}</Text>
    </>
  );
}

export default GameDetailPage;
