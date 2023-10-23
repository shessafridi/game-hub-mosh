import { Link, useNavigate } from 'react-router-dom';

import { HStack, Image } from '@chakra-ui/react';

import logo from '../assets/logo.webp';
import useGameQueryStore from '../hooks/useGameQueryStore';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

function NavBar() {
  const navigate = useNavigate();
  const setSearchText = useGameQueryStore(s => s.setSearchText);

  return (
    <HStack padding='10px'>
      <Link style={{ display: 'contents' }} to='/'>
        <Image boxSize='60px' src={logo}></Image>
      </Link>
      <SearchInput
        onSearch={searchText => {
          setSearchText(searchText);
          navigate('/');
        }}
      />
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
