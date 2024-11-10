import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { PokemonModule } from './../pokemon/pokemon.module';
import { AuthModule } from 'src/auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports:[PokemonModule, AuthModule],
})
export class SeedModule {}
