import { PokeAbilities } from "../types/pokeability.type";
import { PokeCries } from "../types/pokecries.type";
import { PokeForms } from "../types/pokeforms.type";
import { PokeItems } from "../types/pokeitems.type";
import { PokeSprites } from "../types/pokesprites.type";
import { PokeStats } from "../types/pokestats.type";
import { PokeTypes } from "../types/poketypes.type";

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
