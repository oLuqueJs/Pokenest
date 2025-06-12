import { HttpService } from "@nestjs/axios";
import { BadRequestException, HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { firstValueFrom } from "rxjs";
import { ItemDTO } from "./dto/item.dto";
import { ItemAttributesDto } from "./dto/item-attributes.dto";

@Injectable()
export class ItemService {
  constructor(
    private readonly httpService: HttpService,
  ) {}

  private BASE_API_URL = `${process.env.POKEAPI_URL}`;

  async fetchFromPokeApi<T>(endpoint: string): Promise<T> {
    try {
    const { data } = await firstValueFrom(
      this.httpService.get<T>(
        endpoint
      ));
      return data
    } catch (error) {
      if (error?.response?.status === 404) {
        throw new HttpException(
          'Pokemon not found',
          HttpStatus.NOT_FOUND,
        )
      }

      throw new HttpException(
        'PokeApi Access Error',
        HttpStatus.SERVICE_UNAVAILABLE,
      )
    }
  }

  async getItem(itemI: string): Promise<ItemDTO> {
    if (!itemI) {
      throw new BadRequestException("Item ID or name is required")
    }

    const REQ_URL = `${this.BASE_API_URL}item/${itemI}`;
    const res = await this.fetchFromPokeApi<ItemDTO>(REQ_URL);

    return { ...res };
  }

  async getItemAttributes(itemI: string): Promise<ItemAttributesDto> {
    if (!itemI) {
      throw new BadRequestException("Item ID or name is required")
    }

    const REQ_URL = `${this.BASE_API_URL}item-attribute/${itemI}`
    const res = await this.fetchFromPokeApi<ItemAttributesDto>(REQ_URL)

    return { ...res };
  }
}