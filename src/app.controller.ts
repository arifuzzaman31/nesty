import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('myname')
  getMyName(@Query('age') age: number, @Query('breed') breed: string): string {
    return this.appService.getMyInfo(age);
    // return `This action returns all cats filtered by age: ${age} and breed: ${breed}`;
  }
}
