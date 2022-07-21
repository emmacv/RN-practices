declare module '*.jpeg';
declare module '*.png';

import { Pokemon, Result, SinglePokemon } from './src/types/pokemon';

declare global {
  type PokemonType = Pokemon;
  type PokemonResultType = Result;
  type PokemonSingleType = SinglePokemon;
}