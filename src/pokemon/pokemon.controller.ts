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


@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Post()
  create(@Body() createPokemonDto: CreatePokemonDto) {
    return this.pokemonService.create(createPokemonDto);
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
    @Body() updatePokemonDto: UpdatePokemonDto
  ) {
    
    return this.pokemonService.update(id, updatePokemonDto);
  }

  @Delete(':id')
  remove(@Param('id',ParseUUIDPipe) id: string) {
    return this.pokemonService.remove(id);
  }

}
