import { HttpCode, Injectable } from '@nestjs/common';
import { CreateGyerekDto } from './dto/create-gyerek.dto';
import { UpdateGyerekDto } from './dto/update-gyerek.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class GyerekService {
  constructor(private readonly db: PrismaService) {}

  async create(createGyerekDto: CreateGyerekDto) {
    return this.db.gyerek.create({
      data: {
        nev: createGyerekDto.nev,
        cim: createGyerekDto.cim,
        jorossz: createGyerekDto.jorossz,
      },
    });
  }

  async findAll() {
    return await this.db.gyerek.findMany();
  }

  async findOne(id: number) {
    const gyerek = await this.db.gyerek.findUnique({
      where: { id },
    });
    
    if (!gyerek) {
      return { statusCode: 404, message: 'Gyerek nem található' };
    }
    
    return gyerek;
  }

  async update(id: number, updateGyerekDto: UpdateGyerekDto) {
    const res = await this.db.gyerek.updateMany({
      where: { id },
      data: {
        nev: updateGyerekDto.nev,
        cim: updateGyerekDto.cim,
        jorossz: updateGyerekDto.jorossz,
      },
    });
    
    if (res.count === 0) {
      return { statusCode: 404, message: 'Gyerek nem található' };
    }
    
    return { updated: res.count };
  }

  async remove(id: number) {
    await this.db.gyerekJatekok.deleteMany({
      where: { gyerekId: id },
    });
    
    const res = await this.db.gyerek.deleteMany({
      where: { id },
    });
    
    if (res.count === 0) {
      return { statusCode: 404, message: 'Gyerek nem található'};
    }
    
    return { deleted: res.count };
  }

  async addJatek(gyerekId: number, jatekId: number) {
    return await this.db.gyerekJatekok.create({
      data: {
        gyerekId,
        jatekId,
      },
    });
  }

  async removeJatek(gyerekId: number, jatekId: number) {
    const result = await this.db.gyerekJatekok.deleteMany({
      where: {
        gyerekId,
        jatekId,
      },
    });
    return { deleted: result.count };
  }
}
