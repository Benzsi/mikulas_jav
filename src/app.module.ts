import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { GyerekModule } from './gyerek/gyerek.module';
import { JatekModule } from './jatek/jatek.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  }), GyerekModule, JatekModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
