import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

type GameCardContainerProps = {
  children: ReactNode;
};

function GameCardContainer({ children }: GameCardContainerProps) {
  return (
    <Box borderRadius={10} overflow='hidden'>
      {children}
    </Box>
  );
}

export default GameCardContainer;
