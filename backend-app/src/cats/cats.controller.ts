import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './cat.entity';
import { CreateCatDto } from './dto/create.dto';
import { UpdateCatDto } from './dto/update.dto';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get()
  findAll(): Promise<Cat[]> {
    return this.catsService.getAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Cat | null> {
    return this.catsService.getById(id);
  }

  @Post()
  create(@Body() createCatDto: CreateCatDto): Promise<Cat> {
    return this.catsService.create(createCatDto);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() updateCatDto: UpdateCatDto,
  ): Promise<Cat> {
    return this.catsService.update(id, updateCatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.catsService.remove(id);
  }
}
