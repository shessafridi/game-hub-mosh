import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

const sortOrders = [
  {
    value: '',
    label: 'Relevance',
  },
  {
    value: '-added',
    label: 'Data added',
  },
  {
    value: 'name',
    label: 'Name',
  },
  {
    value: '-released',
    label: 'Release Data',
  },
  {
    value: '-metacritic',
    label: 'Popularity',
  },
  {
    value: '-rating',
    label: 'Average Rating',
  },
];

type SortSelectorProps = {
  sortOrder: string;
  onSelectSortOrder: (sortOrder: string) => any;
};

function SortSelector({ sortOrder, onSelectSortOrder }: SortSelectorProps) {
  const currentSortOrder = sortOrders.find(order => order.value === sortOrder);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By: {currentSortOrder?.label || 'Relevance'}
      </MenuButton>
      <MenuList>
        {sortOrders.map(order => (
          <MenuItem
            onClick={() => onSelectSortOrder(order.value)}
            key={order.value}
            value={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default SortSelector;