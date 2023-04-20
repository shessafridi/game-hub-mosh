import { HStack, Image } from '@chakra-ui/react';

import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

type NavbarProps = {
  onSearch: (searchText: string) => any;
};

function NavBar({ onSearch }: NavbarProps) {
  return (
    <HStack padding='10px'>
      <Image boxSize='60px' src={logo}></Image>
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
