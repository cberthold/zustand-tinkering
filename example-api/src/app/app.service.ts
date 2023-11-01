import { Injectable } from '@nestjs/common';

export interface GetDataResponse {
  randomNumber: number[];
}

@Injectable()
export class AppService {
   async getData(): Promise<GetDataResponse> {
    const url = new URL("https://www.randomnumberapi.com/api/v1.0/randomredditnumber?min=100&max=1000&count=1")
    const response = await fetch(url);
    const j = await response.json();
    console.log(j);
    return ({ randomNumber: j });
  }
}
