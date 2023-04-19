import React from 'react';

import useGenres from '../hooks/useGenres';

type GenreListProps = {};

function GenreList({}: GenreListProps) {
  const { genre } = useGenres();
  return (
    <div>
      <ul>
        {genre.map(genre => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default GenreList;
