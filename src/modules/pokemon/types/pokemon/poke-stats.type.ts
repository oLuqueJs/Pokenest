export type PokeStats = {
  base_stat: number;
  effort: number;
  stat: PokeStat;
}

type PokeStat = {
  name: string;
  url: string;
}
