import { Injectable } from '@nestjs/common';
import { PokemonService } from './../pokemon';
import { initialData } from './data/seed-data';
import { Repository } from 'typeorm';
import { User } from 'src/auth/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { hashSync } from 'bcrypt';

@Injectable()
export class SeedService {

  constructor(
    private readonly pokemonService: PokemonService,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async runSeed(){
    await this.deleteTables();  
    this.insertNewPokemons( await this.insertUsers());
    return 'seed executed';
  }

  private async insertUsers(){
    const seedUsers = initialData.users;
    const users: User[] = [];

    seedUsers.forEach( user => {
      user.password = hashSync(user.password,10);
      users.push(this.userRepository.create(user));
    })
  
    await this.userRepository.save( users );
    return users[0];
  }

  private async insertNewPokemons(user: User){
    const pokemons = initialData.pokemons;
    const insertPromises = [];
   
    pokemons.forEach( pokemon => {
      insertPromises.push(this.pokemonService.create(pokemon,user));
    });
   
    await Promise.all( insertPromises );
    return true;
  }

  private async deleteTables(){
    await this.pokemonService.deleteAllPokemon();
    const queryBuilder = this.userRepository.createQueryBuilder();
    queryBuilder
    .delete()
    .where({})
    .execute();
  }
}
