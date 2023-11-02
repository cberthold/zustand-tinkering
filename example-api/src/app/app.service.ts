import { Injectable } from '@nestjs/common';

export interface PagedResult {
  count: number
  next: string
  previous: string
  results: People[]
}

export interface Result {
  count: number
  results: People[]
}

export interface People {
  name: string
  height: string
  mass: string
  hair_color: string
  skin_color: string
  eye_color: string
  birth_year: string
  gender: string
  homeworld: string
  films: string[]
  species: string[]
  vehicles: string[]
  starships: string[]
  created: string
  edited: string
  url: string
}


@Injectable()
export class AppService {
   async getData(): Promise<Result> {
    let url = new URL("https://swapi.dev/api/people")
    let response = await fetch(url);
    let pagedResult: PagedResult = await response.json();
    
    const result:Result = {
      count: pagedResult.count,
      results:pagedResult.results,
    };

    while(pagedResult != null && pagedResult.next != null) {
      url = new URL(pagedResult.next);
      response = await fetch(url);
      pagedResult = await response.json();
      result.results = result.results.concat(pagedResult.results);
    }
    return result;
  }
}
