import { Controller, Get, Param } from "@nestjs/common";
import { PokemonService } from "./pokemon.service";
import { PokemonDTO } from "./dto/pokemon.dto";
import { PokemonCharacteristicsDTO } from "./dto/pokemon-characteristics.dto";
import { PokemonSpeciesDTO } from "./dto/pokemon-species.dto";

@Controller('pokemon')
export class PokemonController {
  constructor(
    private readonly pokemonService: PokemonService
  ) {}

  @Get('/:pokeI')
  async getPokemonInfo(
    @Param('pokeI') pokeI: string
  ): Promise<PokemonDTO> {
    return await this.pokemonService.getPokemonInfoByName(pokeI);
  }

  @Get('/characteristic/:pokeI')
  async getPokemonCharacteristics(
    @Param('pokeI') pokeI: string
  ): Promise<PokemonCharacteristicsDTO> {
    return await this.pokemonService.getPokemonCharacteristics(pokeI)
  }

  @Get('/species/:pokeI')
  async getPokeSPecies(
    @Param('pokeI') pokeI: string
  ): Promise<PokemonSpeciesDTO> {
    return await this.pokemonService.getPokemonSpecies(pokeI)
  }
}