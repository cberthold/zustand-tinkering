import { Controller, Get } from '@nestjs/common';

import { AppService, GetDataResponse } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getData(): Promise<GetDataResponse> {
    return this.appService.getData();
  }
}
