import { Controller, Get } from '@nestjs/common';

import { AppService, Result } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getData(): Promise<Result> {
    return this.appService.getData();
  }
}
