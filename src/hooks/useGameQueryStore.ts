import { create } from 'zustand';

interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchText?: string;
}

type GameQueryStore = {
  gameQuery: GameQuery;
  setSortOrder: (sortOrder: string) => void;
  setPlatform: (platformId?: number) => void;
  setSearchText: (searchText: string) => void;
  setGenre: (genreId?: number) => void;
};

const useGameQueryStore = create<GameQueryStore>(set => ({
  gameQuery: {},
  setSearchText: searchText => set({ gameQuery: { searchText } }),

  setSortOrder: sortOrder =>
    set(store => ({ gameQuery: { ...store.gameQuery, sortOrder } })),

  setPlatform: platformId =>
    set(store => ({ gameQuery: { ...store.gameQuery, platformId } })),

  setGenre: genreId =>
    set(store => ({ gameQuery: { ...store.gameQuery, genreId } })),
}));

export default useGameQueryStore;
