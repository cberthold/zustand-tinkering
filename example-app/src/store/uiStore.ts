import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { devtools } from 'zustand/middleware';

interface UIState {
    resultData: Result;
    loading: boolean;
}

interface UIActions {
    setResults: (by: Result) => void;
    getPeople: () => void;
}

const useUiStore = create<UIState>()(
    immer(devtools(
        (set) => ({
            resultData: {
                count: 0,
                results: [],
            },
            loading: false,
        })
    ))
)

const sleep = (interval: number) => {
    const promise = new Promise((resolveInner) => {
        setTimeout(resolveInner, interval);
      });
      return promise;
} 

const setResults = (by: Result) => useUiStore.setState((state) => ({ resultData: by }));
const setIsLoading = (loading: boolean) => useUiStore.setState((state) => ({ loading: loading }));


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

const getPeople = async () => {
    setIsLoading(true);
    const url = new URL("http://localhost:3000/api")
    const response = await fetch(url);
    const result:Result = await response.json();
    setResults(result);
    setIsLoading(false);
};

export const ACTIONS: UIActions = {
    setResults,
    getPeople,
};

export default useUiStore;