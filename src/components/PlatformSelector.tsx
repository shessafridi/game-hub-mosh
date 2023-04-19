import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

import usePlatforms from '../hooks/usePlatforms';

type PlatformSelectorProps = {};

function PlatformSelector({}: PlatformSelectorProps) {
  const { data, error, isLoading } = usePlatforms();

  if (!error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Platforms
      </MenuButton>
      <MenuList>
        {!isLoading &&
          data.map(platform => (
            <MenuItem key={platform.id}>{platform.name}</MenuItem>
          ))}
      </MenuList>
    </Menu>
  );
}

export default PlatformSelector;
