import React from 'react';

import useGenres from '../hooks/useGenres';

type GenreListProps = {};

function GenreList({}: GenreListProps) {
  const { data } = useGenres();
  return (
    <div>
      <ul>
        {data.map(genre => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default GenreList;
