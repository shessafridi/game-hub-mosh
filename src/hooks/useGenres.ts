import { useEffect, useState } from 'react';

import { Genre } from '../models/game';
import useData from './useData';

const useGenres = () => useData<Genre>('/genres');
export default useGenres;
