export interface Game {
  id: number;
  slug: string;
  name: string;
  released: string;
  tba: boolean;
  background_image: string;
  rating: number;
  rating_top: number;
  ratings: Rating[];
  ratings_count: number;
  reviews_text_count: number;
  added: number;
  added_by_status: AddedByStatus;
  metacritic: number;
  playtime: number;
  suggestions_count: number;
  updated: string;
  user_game: null;
  reviews_count: number;
  saturated_color: string;
  dominant_color: string;
  platforms: PlatformWrapper[];
  parent_platforms: PlatformWrapper[];
  genres: Genre[];
  stores: StoreWrapper[];
  clip: null;
  tags: Genre[];
  esrb_rating: EsrbRating;
  short_screenshots: ShortScreenshot[];
}

export interface AddedByStatus {
  yet: number;
  owned: number;
  beaten: number;
  toplay: number;
  dropped: number;
  playing: number;
}

export interface EsrbRating {
  id: number;
  name: string;
  slug: string;
}

export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
  domain?: GameDomain;
  language?: string;
}
export interface Store {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
  domain?: GameDomain;
  language?: string;
}

export enum GameDomain {
  AppsAppleCOM = 'apps.apple.com',
  EpicgamesCOM = 'epicgames.com',
  GogCOM = 'gog.com',
  MarketplaceXboxCOM = 'marketplace.xbox.com',
  MicrosoftCOM = 'microsoft.com',
  NintendoCOM = 'nintendo.com',
  PlayGoogleCOM = 'play.google.com',
  StorePlaystationCOM = 'store.playstation.com',
  StoreSteampoweredCOM = 'store.steampowered.com',
}
export interface PlatformWrapper {
  platform: Platform;
}

export interface Platform {
  id: number;
  name: string;
  slug: string;
  image: null;
  year_end: null;
  year_start: number | null;
  games_count: number;
  image_background: string;
}

export interface Requirements {
  minimum: string;
  recommended?: string;
}

export interface Rating {
  id: number;
  title: RatingTitle;
  count: number;
  percent: number;
}

export enum RatingTitle {
  Exceptional = 'exceptional',
  Meh = 'meh',
  Recommended = 'recommended',
  Skip = 'skip',
}

export interface ShortScreenshot {
  id: number;
  image: string;
}

export interface StoreWrapper {
  id: number;
  store: Store;
}
