import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { AboutService } from './about.service';
import { AboutDTO } from './about.dto';


@Controller('/about')
export class AboutController {
  constructor(private readonly aboutService: AboutService) {}

  @Get()
  getAbout() {
    return this.aboutService.getAbout();
  }

  @Post()
  postData(@Body() body: AboutDTO) {
    return this.aboutService.postData(body);
  }

  @Get('us/s')
  sendAbout(): string {
    return this.aboutService.sendAbout();
  }
}
