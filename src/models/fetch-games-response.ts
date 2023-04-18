import { Game } from './game';

export interface FetchGamesResponse {
  count: number;
  next: string;
  previous: string;
  results: Game[];
}
