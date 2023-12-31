import { Module } from '@nestjs/common';
import { AboutService } from './about.service';
import { AboutController } from './about.controller';

@Module({
  imports: [],
  providers: [AboutService],
  controllers: [AboutController],
})
export class AboutModule {}
