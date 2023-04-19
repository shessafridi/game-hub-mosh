import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from '@chakra-ui/react';

import useGenres from '../hooks/useGenres';
import { Genre } from '../models/genre';
import getCroppedImageUrl from '../services/image-url';

type GenreListProps = {
  onSelectGenre: (genre: Genre) => any;
};

function GenreList({ onSelectGenre }: GenreListProps) {
  const { data, isLoading, error } = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <List>
      {!isLoading &&
        data.map(genre => (
          <ListItem key={genre.id} paddingY='5px'>
            <HStack>
              <Image
                boxSize='32px'
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                onClick={() => onSelectGenre(genre)}
                fontSize='md'
                variant='link'
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
    </List>
  );
}

export default GenreList;
