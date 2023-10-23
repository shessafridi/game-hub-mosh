export default interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
  games: GenreGame[];
}

export interface GenreGame {
  id: number;
  slug: string;
  name: string;
  added: number;
}
