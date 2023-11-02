export interface UIState {
    resultData: Result;
    loading: boolean;
    filter: Filter;
    filteredData: Result;
}

export interface UIActions {
    setResults: (by: Result) => void;
    getPeople: () => void;
    setFilmFilterEnabled: (id: string) => void;
}

export interface Filter {
    films: FilterItem[];
    filmNames: Set<string>;
  }
  
  export interface FilterItem {
      id: string;
      name: string;
      enabled: boolean;
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
  