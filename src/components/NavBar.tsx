import { HStack, Image } from '@chakra-ui/react';

import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';

function NavBar() {
  return (
    <HStack>
      <Image boxSize='60px' src={logo}></Image>
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
