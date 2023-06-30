import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';

@Module({
  imports: [AdminService],
  providers: [AdminController],
})
export default class AdminModule {}