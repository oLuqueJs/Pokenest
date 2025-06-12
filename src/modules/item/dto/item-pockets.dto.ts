import { PocketsCategory } from "../types/pockets/poc-category.type";
import { PocketsName } from "../types/pockets/poc-name.type";

export class ItemPocketsDTO {
  id: number;
  name: string;
  categories: PocketsCategory[];
  names: PocketsName[];
}