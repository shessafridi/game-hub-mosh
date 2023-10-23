import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

import { Box, Heading, Text } from '@chakra-ui/react';

import NavBar from '../components/NavBar';

type Props = {};

function ErrorPage({}: Props) {
  const error = useRouteError();
  const isNotFound = isRouteErrorResponse(error);
  return (
    <>
      <NavBar />
      <Box p='5'>
        <Heading>Oops</Heading>
        <Text>
          {isNotFound
            ? 'This page does not exist.'
            : 'Sorry an unexpected error occured.'}
        </Text>
      </Box>
    </>
  );
}

export default ErrorPage;
