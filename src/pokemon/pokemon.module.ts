import { Module } from '@nestjs/common';
import { PokemonService, PokemonController } from './';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pokemon, PokemonImage } from './entities';

@Module({
  controllers: [PokemonController],
  providers: [PokemonService],
  imports: [
    TypeOrmModule.forFeature([Pokemon, PokemonImage]),
  ],
  exports:[
    PokemonService, 
    TypeOrmModule
  ],
})
export class PokemonModule {}
