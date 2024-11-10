import { Module } from '@nestjs/common';
import { PokemonService, PokemonController } from './';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pokemon, PokemonImage } from './entities';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [PokemonController],
  providers: [PokemonService],
  imports: [
    AuthModule,
    TypeOrmModule.forFeature([Pokemon, PokemonImage]),
  ],
  exports:[
    PokemonService, 
    TypeOrmModule
  ],
})
export class PokemonModule {}
