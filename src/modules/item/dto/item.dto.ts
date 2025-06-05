import { ItemAttributes } from "../types/item/item-attributes.type";
import { ItemBabyTrigger } from "../types/item/item-baby-trigger.type";
import { ItemCategory } from "../types/item/item-category.type";
import { ItemEffectEntries } from "../types/item/item-effect-entries.type";
import { ItemFlavorText } from "../types/item/item-flavor-text.type";
import { ItemFlingEffect } from "../types/item/item-fling-effect.type";
import { ItemGameIndices } from "../types/item/item-game-indices.type";
import { ItemNames } from "../types/item/item-names.type";
import { ItemPokemonHeld } from "../types/item/item-pokemon-held.type";
import { ItemSprites } from "../types/item/item-sprites.type";

export class ItemDto {
  id: number;
  name: string;
  cost: number;
  fling_power: number;
  flin_effect: ItemFlingEffect;
  attributes: ItemAttributes[];
  category: ItemCategory;
  effect_entries: ItemEffectEntries[];
  flavor_text_entries: ItemFlavorText[];
  game_indices: ItemGameIndices[];
  names: ItemNames[];
  held_by_pokemon: ItemPokemonHeld[];
  baby_trigger_for: ItemBabyTrigger;
  sprites: ItemSprites;
}
