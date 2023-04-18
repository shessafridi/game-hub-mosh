export interface Game {
  id: number;
  slug: string;
  name: string;
  released: string;
  tba: boolean;
  background_image: string;
  rating: number;
  rating_top: number;
  ratings: AddedByStatus;
  ratings_count: number;
  reviews_text_count: string;
  added: number;
  added_by_status: AddedByStatus;
  metacritic: number;
  playtime: number;
  suggestions_count: number;
  updated: string;
  esrb_rating: AddedByStatus;
  platforms: any[];
}

export interface AddedByStatus {}
