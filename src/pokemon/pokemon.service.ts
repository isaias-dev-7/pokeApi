import { BadRequestException,
         Injectable, 
         InternalServerErrorException, 
         Logger, 
         NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { DataSource, Repository } from 'typeorm';
import { CreatePokemonDto, 
         UpdatePokemonDto 
        } from './dto';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
import { validate as isUUID } from "uuid";
import { PokemonImage, Pokemon } from './entities';

@Injectable()
export class PokemonService {

  private readonly logger = new Logger('PokemonService');

  constructor(
    @InjectRepository(Pokemon)
    private readonly pokemonRepository: Repository<Pokemon>,

    @InjectRepository(PokemonImage)
    private readonly pokemonImageRepository: Repository<PokemonImage>,

    private readonly dataSource: DataSource,
  ){}

  async create(createPokemonDto: CreatePokemonDto) {
     try {

        const { images = [], ...pokemonDetails } = createPokemonDto;
        const pokemon = this.pokemonRepository.create({
          ...pokemonDetails,
          images: images.map( image => this.pokemonImageRepository.create({ url: image})),
        });
        await this.pokemonRepository.save(pokemon);
        return { ...pokemon, images };
     } catch (error) {
      this.handleDBException(error);
     }
  }
  async findAll(paginationDto: PaginationDto) {
    const {limit = 10, offset = 0} = paginationDto; 
    const pokemon = await this.pokemonRepository.find({
      take: limit,
      skip: offset,
      relations: {
        images: true, 
      }
    });

    return pokemon.map( ({ images, ...rest }) => ({
      ...rest,
      images: images.map( img => img.url),
    }))
  }

  async findOne(term: string) {
     const pokemon = (isUUID(term)) ? 
     await this.pokemonRepository.findOneBy({ id: term })
      :
     await this.pokemonRepository.findOneBy({ name: term });
    if(!pokemon) throw new NotFoundException(`pokemon with id ${term} not found`);
    return pokemon;
  }

  async update(id: string, updatePokemonDto: UpdatePokemonDto) {
    const { images, ...toUpdate } = updatePokemonDto;
    const pokemon = await this.pokemonRepository.preload({ id, ...toUpdate });

    if(!pokemon) throw new BadRequestException(`Pokemon with id ${id} not found`);
     //query runner look more about it
     const queryRunner = this.dataSource.createQueryRunner();
     await queryRunner.connect();
     await queryRunner.startTransaction();

    try {
      if( images ){
        await queryRunner.manager.delete(PokemonImage, { pokemon: { id } })
        pokemon.images = images.map(
          image => this.pokemonImageRepository.create({ url: image })
        ); 
      } 
      
      await queryRunner.manager.save( pokemon );
     // this.pokemonRepository.save( pokemon );
      await queryRunner.commitTransaction();
      await queryRunner.release();
      return this.findOne(id);
      
    } catch (error) {
      await queryRunner.rollbackTransaction();
      await queryRunner.release(); 
      this.handleDBException(error);
    }
  }

  async remove(id: string) {
    const pokemon = await this.findOne(id);
    await this.pokemonRepository.remove( pokemon );
  }

  async deleteAllPokemon(){
    const query = this.pokemonRepository.createQueryBuilder('pokemon');
    try {
      await query
      .delete()
      .where({})
      .execute();
    } catch (error) {
      this.handleDBException(error);
    }
  }

  private handleDBException(error: any){
    if(error.code === '23505') throw new BadRequestException(error.detail);
    this.logger.error(error);
    console.log(error);
    throw new InternalServerErrorException('something fail ');
  }

}
