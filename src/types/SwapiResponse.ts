import { Character } from "./Character";

export interface SwapiResponse {
  count: number;
  next: string;
  previous: string;
  results: Array<Character>;
}
