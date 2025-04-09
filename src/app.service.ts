import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getMyInfo(ag): string {
    return `This action returns all cats: ${ag}`;
  }
}
