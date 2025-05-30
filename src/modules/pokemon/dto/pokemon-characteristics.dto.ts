import { CharacteristicDescriptions } from "../types/characteristics/chadescriptions.type";
import { CharacterisctHighestStat } from "../types/characteristics/chahigheststat.type";

export class PokemonCharacteristicsDTO {
  id: number;
  gene_modulo: number;
  possible_values: number[];
  highest_stat: CharacterisctHighestStat;
  descriptions: CharacteristicDescriptions
}