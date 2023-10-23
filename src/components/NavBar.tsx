import { HStack, Image } from '@chakra-ui/react';

import logo from '../assets/logo.webp';
import useGameQueryStore from '../hooks/useGameQueryStore';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

function NavBar() {
  const setSearchText = useGameQueryStore(s => s.setSearchText);

  return (
    <HStack padding='10px'>
      <Image boxSize='60px' src={logo}></Image>
      <SearchInput onSearch={setSearchText} />
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
