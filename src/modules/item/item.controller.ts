import { Controller, Get, Param } from "@nestjs/common";
import { ItemService } from "./item.service";
import { ItemDTO } from "./dto/item.dto";
import { ItemAttributesDto } from "./dto/item-attributes.dto";
import { ItemCategoriesDTO } from "./dto/item-categories.dto";

@Controller('item')
export class ItemController {
  constructor(
    private readonly itemService: ItemService,
  ) {}

  @Get(':itemI')
  async getItem(
    @Param('itemI') itemI: string,
  ): Promise<ItemDTO> {
    return await this.itemService.getItem(itemI)
  }

  @Get('/attributes/:itemI')
  async getItemAttributes(
    @Param('itemI') itemI: string,
  ): Promise<ItemAttributesDto> {
    return await this.itemService.getItemAttributes(itemI)
  }

  @Get('/categories/:itemI')
  async getItemCategories(
    @Param('itemI') itemI: string
  ): Promise<ItemCategoriesDTO> {
    return await this.itemService.getItemCategories(itemI);
  }
}