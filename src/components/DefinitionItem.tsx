import { PropsWithChildren } from 'react';

import { Box, Heading } from '@chakra-ui/react';

type Props = {
  label: string;
} & PropsWithChildren;

function DefinitionItem({ label, children }: Props) {
  return (
    <Box>
      <Heading as='dt' fontSize='medium' color='gray.600'>
        {label}
      </Heading>
      <dd>{children}</dd>
    </Box>
  );
}

export default DefinitionItem;
