import { HttpService } from "@nestjs/axios";
import { BadRequestException, HttpException, HttpStatus, Injectable, ServiceUnavailableException } from "@nestjs/common";
import { firstValueFrom } from "rxjs";
import { PokemonDTO } from "./dto/pokemon.dto";
import { PokemonCharacteristicsDTO } from "./dto/pokemon-characteristics.dto";

@Injectable()
export class PokemonService {
  constructor(
    private readonly httpService: HttpService
  ) {}

  private BASE_API_URL = `${process.env.POKEAPI_URL}`;

  async fetchFromPokeAPI<T>(endpoint: string): Promise<T> {
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
        );
      }

      throw new HttpException(
        'PokeApi Access Error',
        HttpStatus.SERVICE_UNAVAILABLE,
      );
    }
  }

  async getPokemonInfoByName(pokeI: string): Promise<PokemonDTO> {
    if (!pokeI) {
      throw new BadRequestException('Pokemon ID or name is required.')
    }

    const REQ_URL = `${this.BASE_API_URL}pokemon/${pokeI.toLowerCase()}`;
    const data = await this.fetchFromPokeAPI<PokemonDTO>(REQ_URL)
      
    if (!data) {
      throw new ServiceUnavailableException('PokeAPI is not avaiable')
    }
      
    return  {
      id: data.id,
      name: data.name,
      stats: data.stats,
      height: data.height,
      weight: data.weight,
      forms: data.forms,
      types: data.types,
      held_items: data.held_items,
      abilities: data.abilities,
      cries: data.cries,
      sprites: data.sprites,
    };
  }


  async getPokemonCharacteristics(pokeI: string): Promise<PokemonCharacteristicsDTO> {
    if (!pokeI) {
      throw new BadRequestException('Pokemon ID or name is required.')
    }

    const REQ_URL = `${this.BASE_API_URL}characteristic/${pokeI.toLowerCase()}`
    const data = await this.fetchFromPokeAPI<PokemonCharacteristicsDTO>(REQ_URL)

    if (!data) {
      throw new ServiceUnavailableException('PokeAPI is not avaiable')
    }

    return {
      id: data.id,
      gene_modulo: data.gene_modulo,
      possible_values: data.possible_values,
      highest_stat: data.highest_stat,
      descriptions: data.descriptions
    }
  }
}
