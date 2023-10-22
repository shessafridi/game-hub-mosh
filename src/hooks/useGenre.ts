import useGenres from './useGenres';

export const useGenre = (id?: number) => {
  const { data } = useGenres();

  return data.results.find(genre => genre.id === id);
};
