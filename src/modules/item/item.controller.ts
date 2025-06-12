import { Controller, Get, Param } from "@nestjs/common";
import { ItemService } from "./item.service";
import { ItemDTO } from "./dto/item.dto";

@Controller('item')
export class ItemController {
  constructor(
    private readonly itemService: ItemService,
  ) {}

  @Get(':itemI')
  async getItem (
    @Param('itemI') itemI: string,
  ): Promise<ItemDTO> {
    return await this.itemService.getItem(itemI)
  }
}