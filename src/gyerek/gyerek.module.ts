import { Module } from '@nestjs/common';
import { GyerekService } from './gyerek.service';
import { GyerekController } from './gyerek.controller';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [GyerekController],
  providers: [GyerekService, PrismaService],
})
export class GyerekModule {}
