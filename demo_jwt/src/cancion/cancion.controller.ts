import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CancionService } from './cancion.service';
import { CreateCancionDto } from './dto/create-cancion.dto';
import { UpdateCancionDto } from './dto/update-cancion.dto';
import { CancionEntity } from './entities/cancion.entity';

@ApiTags('canciones')
@Controller('canciones')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class CancionController {
  constructor(private readonly cancionService: CancionService) {}

  @Post()
  @ApiCreatedResponse({ type: CancionEntity })
  create(@Body() createCancionDto: CreateCancionDto) {
    return this.cancionService.create(createCancionDto);
  }

  @Get()
  @ApiOkResponse({ type: CancionEntity, isArray: true })
  findAll() {
    return this.cancionService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: CancionEntity })
  findOne(@Param('id') id: string) {
    return this.cancionService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: CancionEntity })
  update(@Param('id') id: string, @Body() updateCancionDto: UpdateCancionDto) {
    return this.cancionService.update(+id, updateCancionDto);
  }

  @Delete(':id')
  @ApiOkResponse()
  remove(@Param('id') id: string) {
    return this.cancionService.remove(+id);
  }
}
