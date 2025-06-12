import { CategoriesItem } from "../types/categories/cat-item.type";
import { CategoriesName } from "../types/categories/cat-name.type";
import { CategoriesPocket } from "../types/categories/cat-pocket.type";

export class ItemCategoriesDTO {
  id: number;
  name: string;
  items: CategoriesItem[];
  names: CategoriesName[];
  pocket: CategoriesPocket;
}