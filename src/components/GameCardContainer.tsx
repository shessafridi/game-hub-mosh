import { ReactNode } from 'react';

import { Box } from '@chakra-ui/react';

type GameCardContainerProps = {
  children: ReactNode;
  onClick?: () => void;
};

function GameCardContainer({ children, onClick }: GameCardContainerProps) {
  return (
    <Box
      onClick={onClick}
      _hover={{
        transform: 'scale(1.03)',
        overflow: 'hidden',
        transition: 'all 200ms',
        cursor: 'pointer',
      }}
      borderRadius={10}
      overflow='hidden'
    >
      {children}
    </Box>
  );
}

export default GameCardContainer;
