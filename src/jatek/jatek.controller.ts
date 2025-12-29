import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus } from '@nestjs/common';
import { JatekService } from './jatek.service';
import { CreateJatekDto } from './dto/create-jatek.dto';
import { UpdateJatekDto } from './dto/update-jatek.dto';

@Controller('jatek')
export class JatekController {
  constructor(private readonly jatekService: JatekService) {}

  @Post()
    create(@Body() createJatekDto: CreateJatekDto) {
      return this.jatekService.create(createJatekDto);
    }
  
    @Get()
    findAll() {
      return this.jatekService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.jatekService.findOne(+id);
    }
  
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateJatekDto: UpdateJatekDto) {
      return this.jatekService.update(+id, updateJatekDto);
    }
  
    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.jatekService.remove(+id);
    }
}
