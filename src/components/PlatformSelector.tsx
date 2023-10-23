import { BsChevronDown } from 'react-icons/bs';

import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';

import useGameQueryStore from '../hooks/useGameQueryStore';
import { usePlatform } from '../hooks/usePlatform';
import usePlatforms from '../hooks/usePlatforms';

function PlatformSelector() {
  const { data, error, isLoading } = usePlatforms();

  const selectedPlatformId = useGameQueryStore(s => s.gameQuery.platformId);
  const setSelectedPlatformId = useGameQueryStore(s => s.setPlatform);

  const selectedPlatform = usePlatform(selectedPlatformId);

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
              onClick={() => setSelectedPlatformId(platform.id)}
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
