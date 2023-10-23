import { useState } from 'react';

import { Button, Text } from '@chakra-ui/react';

type Props = {
  children: string;
};

function ExpanableText({ children }: Props) {
  const [expanded, setExpanded] = useState(false);
  const maxChars = 300;

  if (children.length < maxChars) return <Text>{children}</Text>;

  const summary = children.substring(0, maxChars);

  return (
    <Text>
      {expanded ? children : summary + '...'}{' '}
      <Button
        size='xs'
        fontWeight='bold'
        colorScheme='yellow'
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? 'Show Less' : 'Show Less'}
      </Button>
    </Text>
  );
}

export default ExpanableText;
