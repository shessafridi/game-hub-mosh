import { Outlet } from 'react-router-dom';

import { Box } from '@chakra-ui/react';

import NavBar from '../components/NavBar';

type Props = {};

function Layout({}: Props) {
  return (
    <>
      <NavBar />
      <Box p='5'>
        <Outlet />
      </Box>
    </>
  );
}

export default Layout;
