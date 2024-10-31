import { Injectable } from '@nestjs/common';
import { PokemonService } from './../pokemon';
import { initialData } from './data/seed-data';

@Injectable()
export class SeedService {

  constructor(
    private readonly pokemonService: PokemonService,
  ) {}

  async runSeed(){
    this.insertNewPokemons();
    return 'seed executed';
  }

  private async insertNewPokemons(){
    await this.pokemonService.deleteAllPokemon();
    const pokemons = initialData.pokemons;
    const insertPromises = [];
   
    pokemons.forEach( pokemon => {
      insertPromises.push(this.pokemonService.create(pokemon));
    });
   
    await Promise.all( insertPromises );
    return true;
  }
}
