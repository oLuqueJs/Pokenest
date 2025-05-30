import { PokeAbilities } from "../types/pokemon/pokeability.type";
import { PokeCries } from "../types/pokemon/pokecries.type";
import { PokeForms } from "../types/pokemon/pokeforms.type";
import { PokeItems } from "../types/pokemon/pokeitems.type";
import { PokeSprites } from "../types/pokemon/pokesprites.type";
import { PokeStats } from "../types/pokemon/pokestats.type";
import { PokeTypes } from "../types/pokemon/poketypes.type";

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
