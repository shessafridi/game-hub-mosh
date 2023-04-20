import { HStack, Image } from '@chakra-ui/react';

import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

function NavBar() {
  return (
    <HStack padding='10px'>
      <Image boxSize='60px' src={logo}></Image>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
