export type ItemPokemonHeld = {
  pokemon: Pokemon;
  version_details: VersionDetails[];
}

type Pokemon = {
  name: string;
  url: string;
}

type VersionDetails = {
  rarity: number;
  version: Version;
}

type Version = {
  name: string;
  url: string;
}
