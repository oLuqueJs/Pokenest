import { CharacteristicDescriptions } from "../types/characteristics/cha-descriptions.type";
import { CharacterisctHighestStat } from "../types/characteristics/cha-highest-stat.type";

export class PokemonCharacteristicsDTO {
  id: number;
  gene_modulo: number;
  possible_values: number[];
  highest_stat: CharacterisctHighestStat;
  descriptions: CharacteristicDescriptions
}