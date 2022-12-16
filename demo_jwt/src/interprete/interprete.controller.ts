import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { InterpreteService } from './interprete.service';
import { CreateInterpreteDto } from './dto/create-interprete.dto';
import { UpdateInterpreteDto } from './dto/update-interprete.dto';
import { ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { InterpreteEntity } from './entities/interprete.entity';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@ApiTags('interpretes')
@Controller('interpretes')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class InterpreteController {
  constructor(private readonly interpreteService: InterpreteService) {}

  @Post()
  @ApiCreatedResponse({ type: InterpreteEntity })
  create(@Body() createInterpreteDto: CreateInterpreteDto) {
    return this.interpreteService.create(createInterpreteDto);
  }

  @Get()
  @ApiOkResponse({ type: InterpreteEntity, isArray: true })
  findAll() {
    return this.interpreteService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: InterpreteEntity })
  findOne(@Param('id') id: string) {
    return this.interpreteService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: InterpreteEntity })
  update(@Param('id') id: string, @Body() updateInterpreteDto: UpdateInterpreteDto) {
    return this.interpreteService.update(+id, updateInterpreteDto);
  }

  @Delete(':id')
  @ApiOkResponse()
  remove(@Param('id') id: string) {
    return this.interpreteService.remove(+id);
  }
}
