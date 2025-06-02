import { PokeAbilities } from "../types/pokemon/poke-ability.type";
import { PokeCries } from "../types/pokemon/poke-cries.type";
import { PokeForms } from "../types/pokemon/poke-forms.type";
import { PokeItems } from "../types/pokemon/poke-items.type";
import { PokeSprites } from "../types/pokemon/poke-sprites.type";
import { PokeStats } from "../types/pokemon/poke-stats.type";
import { PokeTypes } from "../types/pokemon/poke-types.type";

export class PokemonDTO {
  id: number;
  name: string;
  abilities: PokeAbilities[];
  stats: PokeStats[];
  types: PokeTypes[];
  forms: PokeForms[];
  held_items: PokeItems[];
  cries: PokeCries;
  sprites: PokeSprites;
  height: number;
  weight: number;
}
