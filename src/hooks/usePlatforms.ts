import { Platform } from '../models/game';
import useData from './useData';

const usePlatforms = () => useData<Platform>('/platforms/lists/parents');

export default usePlatforms;
