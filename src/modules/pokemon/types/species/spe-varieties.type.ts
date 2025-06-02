export type SpeciesVarieties = {
  is_default: boolean;
  pokemon: pokemonInfo;
}

type pokemonInfo = {
  name: string;
  url: string;
}