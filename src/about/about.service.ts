import { Injectable } from '@nestjs/common';
import { AboutDTO } from './about.dto';

@Injectable()
export class AboutService {
  getAbout(): string {
    return 'About us';
  }
  sendAbout(): string {
    return "We're here to have fun";
  }
  postData(body: AboutDTO) {
    console.log(body);
    return 'Accepted';
  }
}
