import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from '@chakra-ui/react';

import useGameQueryStore from '../hooks/useGameQueryStore';
import useGenres from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';

type GenreListProps = {};

function GenreList({}: GenreListProps) {
  const { data, isLoading, error } = useGenres();

  const selectedGenreId = useGameQueryStore(s => s.gameQuery.genreId);
  const setGenreId = useGameQueryStore(s => s.setGenre);

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize='2xl' marginBottom={3}>
        Genres
      </Heading>
      <List>
        {!isLoading &&
          data?.results.map(genre => (
            <ListItem key={genre.id} paddingY='5px'>
              <HStack>
                <Image
                  objectFit='cover'
                  objectPosition='center center'
                  boxSize='32px'
                  borderRadius={8}
                  src={getCroppedImageUrl(genre.image_background)}
                />
                <Button
                  whiteSpace='normal'
                  textAlign='left'
                  onClick={() => setGenreId(genre.id)}
                  fontWeight={genre.id === selectedGenreId ? 'bold' : 'normal'}
                  fontSize='md'
                  variant='link'
                >
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          ))}
      </List>
    </>
  );
}

export default GenreList;
