import { Controller, Get, Param } from "@nestjs/common";
import { PokemonService } from "./pokemon.service";
import { PokemonDTO } from "./dto/pokemon.dto";
import { PokemonCharacteristicsDTO } from "./dto/pokemon-characteristics.dto";
import { PokemonSpeciesDTO } from "./dto/pokemon-species.dto";
import { PokemonLocationDTO } from "./dto/pokemon-location.dto";
import { PokemonNatureDTO } from "./dto/pokemon-nature.dto";

@Controller('pokemon')
export class PokemonController {
  constructor(
    private readonly pokemonService: PokemonService
  ) {}

  @Get('/:pokeI')
  async getPokemonInfo(
    @Param('pokeI') pokeI: string
  ): Promise<PokemonDTO> {
    return await this.pokemonService.getPokemonInfo(pokeI);
  }

  @Get('/characteristic/:pokeI')
  async getPokemonCharacteristics(
    @Param('pokeI') pokeI: string
  ): Promise<PokemonCharacteristicsDTO> {
    return await this.pokemonService.getPokemonCharacteristics(pokeI)
  }

  @Get('/species/:pokeI')
  async getPokeSpecies(
    @Param('pokeI') pokeI: string
  ): Promise<PokemonSpeciesDTO> {
    return await this.pokemonService.getPokemonSpecies(pokeI)
  }

  @Get('/locations/:pokeI')
  async getPokeLocations (
    @Param('pokeI') pokeI: string
  ): Promise<PokemonLocationDTO> {
    return await this.pokemonService.getPokemonLocationAreas(pokeI)
  }

  @Get('/nature/:pokeI')
  async getPokemonNature (
    @Param('pokeI') pokeI: string
  ): Promise<PokemonNatureDTO> {
    return await this.pokemonService.getPokemonNature(pokeI)
  }
}