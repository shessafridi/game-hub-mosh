import { BsChevronDown } from 'react-icons/bs';

import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';

import usePlatforms from '../hooks/usePlatforms';
import { Platform } from '../models/game';

type PlatformSelectorProps = {
  onSelectPlatform: (platform: Platform) => any;
  selectedPlatform: Platform | null;
};

function PlatformSelector({
  selectedPlatform,
  onSelectPlatform,
}: PlatformSelectorProps) {
  const { data, error, isLoading } = usePlatforms();

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform ? selectedPlatform?.name : 'Platforms'}
      </MenuButton>
      <MenuList>
        {!isLoading &&
          data?.results.map(platform => (
            <MenuItem
              onClick={() => onSelectPlatform(platform)}
              key={platform.id}
            >
              {platform.name}
            </MenuItem>
          ))}
      </MenuList>
    </Menu>
  );
}

export default PlatformSelector;
