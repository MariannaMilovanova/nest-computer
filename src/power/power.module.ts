import { Module } from '@nestjs/common';
import { PowerService } from './power.service';

@Module({
  providers: [PowerService],
  //to make it available for others
  exports: [PowerService],
})
export class PowerModule {}
