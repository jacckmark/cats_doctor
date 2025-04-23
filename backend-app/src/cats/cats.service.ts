import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cat } from './cat.entity';
import { Repository } from 'typeorm';
import { CreateCatDto } from './dto/create.dto';
import { UpdateCatDto } from './dto/update.dto';

@Injectable()
export class CatsService {
  constructor(@InjectRepository(Cat) private catsRepository: Repository<Cat>) {}

  async getAll(): Promise<Cat[]> {
    return await this.catsRepository.find();
  }

  async getById(id: number): Promise<Cat | null> {
    const cat = await this.catsRepository.findOne({ where: { id: id } });
    if (!cat)
      throw new NotFoundException(`Cat with provided ID: ${id} does not exist`);

    return cat;
  }

  async create(createCatDto: CreateCatDto): Promise<Cat> {
    const cat = this.catsRepository.create(createCatDto);
    return await this.catsRepository.save(cat);
  }

  async update(id: number, updateCatDto: UpdateCatDto): Promise<Cat> {
    const cat = await this.getById(id);
    const updatedCat = { ...cat, ...updateCatDto };
    return await this.catsRepository.save(updatedCat);
  }

  async remove(id: number) {
    const result = await this.catsRepository.delete(id);

    if (!result.affected)
      throw new NotFoundException(`A cat with ID: ${id} does not exist`);
    return { message: `Cat with ID: ${id} successfully deleted` };
  }
}
