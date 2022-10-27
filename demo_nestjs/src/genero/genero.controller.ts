import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GeneroService } from './genero.service';
import { CreateGeneroDto } from './dto/create-genero.dto';
import { UpdateGeneroDto } from './dto/update-genero.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { GeneroEntity } from './entities/genero.entity';

@ApiTags('generos')
@Controller('generos')
export class GeneroController {
  constructor(private readonly generoService: GeneroService) {}

  @Post()
  @ApiCreatedResponse({ type: GeneroEntity })
  create(@Body() createGeneroDto: CreateGeneroDto) {
    return this.generoService.create(createGeneroDto);
  }

  @Get()
  @ApiOkResponse({ type: GeneroEntity, isArray: true })
  findAll() {
    return this.generoService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: GeneroEntity })
  findOne(@Param('id') id: string) {
    return this.generoService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: GeneroEntity })
  update(@Param('id') id: string, @Body() updateGeneroDto: UpdateGeneroDto) {
    return this.generoService.update(+id, updateGeneroDto);
  }

  @Delete(':id')
  @ApiOkResponse()
  remove(@Param('id') id: string) {
    return this.generoService.remove(+id);
  }
}
