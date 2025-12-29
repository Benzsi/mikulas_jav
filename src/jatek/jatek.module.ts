import { Module } from '@nestjs/common';
import { JatekService } from './jatek.service';
import { JatekController } from './jatek.controller';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [JatekController],
  providers: [JatekService, PrismaService],
})
export class JatekModule {}
