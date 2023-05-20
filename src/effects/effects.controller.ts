import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EffectsService } from './effects.service';
import { CreateEffectDto } from './dto/create-effect.dto';
import { UpdateEffectDto } from './dto/update-effect.dto';

@Controller('effects')
export class EffectsController {
  constructor(private readonly effectsService: EffectsService) {}

  @Post()
  create(@Body() createEffectDto: CreateEffectDto) {
    return this.effectsService.create(createEffectDto);
  }

  @Get()
  findAll() {
    return this.effectsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.effectsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEffectDto: UpdateEffectDto) {
    return this.effectsService.update(+id, updateEffectDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.effectsService.remove(+id);
  }
}
