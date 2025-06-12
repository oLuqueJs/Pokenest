import { AttributesDescription } from "../types/attributes/atr-description.type";
import { AttributesItem } from "../types/attributes/atr-item.type";
import { AttributesName } from "../types/attributes/atr-name.type";
import { AttributesPocket } from "../types/attributes/atr-pocket.type";

export class ItemAttributesDto {
  id: number;
  name: string;
  descriptions: AttributesDescription[];
  items: AttributesItem[];
  names: AttributesName[];
  pocket: AttributesPocket;
}