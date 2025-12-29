import { Injectable } from '@nestjs/common';
import { CreateJatekDto } from './dto/create-jatek.dto';
import { UpdateJatekDto } from './dto/update-jatek.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class JatekService {
  constructor(private readonly db: PrismaService) {}

  async create(createJatekDto: CreateJatekDto) {
    return this.db.jatek.create({
      data: {
        megnevezes: createJatekDto.megnevezes,
        anyag: createJatekDto.anyag,
        suly: createJatekDto.suly,
      },
    });
  }

  async findAll() {
    return await this.db.jatek.findMany();
  }

  async findOne(id: number) {
    return await this.db.jatek.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateJatekDto: UpdateJatekDto) {
    const res = await this.db.jatek.updateMany({
      where: { id },
      data: {
        megnevezes: updateJatekDto.megnevezes,
        anyag: updateJatekDto.anyag,
        suly: updateJatekDto.suly,
      },
    });
    
    if (res.count === 0) {
      return { statusCode: 404, message: 'Játék nem található' };
    }
    
    return { updated: res.count };
  }

  async remove(id: number) {
    await this.db.gyerekJatekok.deleteMany({
      where: { jatekId: id },
    });
    
    const res = await this.db.jatek.deleteMany({
      where: { id },
    });

    if (res.count === 0) {
      return { statusCode: 404, message: 'Játék nem található' };
    }

    return { deleted: res.count };
  }
}
