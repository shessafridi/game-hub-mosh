import { useEffect, useState } from 'react';

import genresData from '../data/genres';

const useGenres = () => ({ data: genresData, isLoading: false, error: null });
export default useGenres;
