import { NatureDecreasedStat } from "../types/nature/nat-decreased-stat.type";
import { NatureHatesFlavor } from "../types/nature/nat-hates-flavor.type";
import { NatureIncreasedStat } from "../types/nature/nat-increased-stat.type";
import { NatureLikesFlavor } from "../types/nature/nat-likes-flavor.type";
import { NatureMovePreferences } from "../types/nature/nat-move-preferences.type";
import { NatureNames } from "../types/nature/nat-names.type";
import { NaturePokeAthlon } from "../types/nature/nat-pokeathlon.type";


export class PokemonNatureDTO {
  id: number;
  name: string;
  decreased_stat: NatureDecreasedStat;
  increased_stat: NatureIncreasedStat;
  likes_flavor: NatureLikesFlavor;
  hates_flavor: NatureHatesFlavor;
  pokeathlon_stat_changes: NaturePokeAthlon[];
  move_battle_style_preferences: NatureMovePreferences[];
  names: NatureNames[];
}