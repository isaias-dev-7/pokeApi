import { Controller, 
         Get, 
         Post, 
         Body, 
         Patch, 
         Param, 
         Delete, 
         ParseUUIDPipe,
         Query 
        } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { CreatePokemonDto, UpdatePokemonDto } from './dto';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
import { Auth, GetUser } from '../auth/decorators';
import { User } from '../auth/entities/user.entity';
import { ApiResponse } from '@nestjs/swagger';
import { Pokemon } from './entities';

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Post()
  @Auth()
  @ApiResponse({status: 201, description:"Pokemon was created.", type: Pokemon})
  @ApiResponse({status: 400, description:"Bad Request."})
  @ApiResponse({status: 403, description:"Forbidden, token related."})
  create(
    @Body() createPokemonDto: CreatePokemonDto,
    @GetUser() user: User
  ) {
    return this.pokemonService.create(createPokemonDto, user);
  }

  @Get()
  findAll(@Query() paginationDto:PaginationDto ) {
    return this.pokemonService.findAll(paginationDto);
  }

  @Get(':term')
  findOne(@Param('term') term: string) { 
    return this.pokemonService.findOne(term);
  }

  @Patch(':id')
  update(
    @Param('id',ParseUUIDPipe) id: string, 
    @Body() updatePokemonDto: UpdatePokemonDto,
    @GetUser() user: User
  ) {
    
    return this.pokemonService.update(id, updatePokemonDto, user);
  }

  @Delete(':id')
  remove(@Param('id',ParseUUIDPipe) id: string) {
    return this.pokemonService.remove(id);
  }

}
