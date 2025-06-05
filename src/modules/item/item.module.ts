import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { ItemController } from "./item.controller";
import { ItemService } from "./item.service";

@Module({
  exports: [],
  imports: [HttpModule],
  controllers: [ItemController],
  providers: [ItemService],
})
export class ItemModule {}