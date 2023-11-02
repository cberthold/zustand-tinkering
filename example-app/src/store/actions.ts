import { People, Result, UIActions } from "./types";
import { v4 as guid } from 'uuid';
import useUiStore from "./uiStore";

const setResults = (by: Result) => useUiStore.setState((state) => ({ resultData: by }));
const setIsLoading = (loading: boolean) => useUiStore.setState((state) => ({ loading: loading }));
const setFilterFilms = (people: People[]) => useUiStore.setState((state) => {
        const filmNames = new Set(state.filter.filmNames);
        const films = [...state.filter.films];
        people.forEach(person => {
            person.films.forEach(film => {
                if(!filmNames.has(film)) {
                    filmNames.add(film);
                    films.push({
                        id: guid(),
                        name: film,
                        enabled: false,
                    });
                }
            })
        });
        
        state.filter.filmNames = filmNames;
        state.filter.films = films.sort((one, two) => (one > two ? -1 : 1));
    });
const setFilteredResults = () => useUiStore.setState((state) => {
    
    const films = new Set(state.filter.films.filter(a=>a.enabled).map(a=> a.name));
    if(films.size) {
        const filteredPeople = state.resultData.results.filter(p => p.films.some(f=> films.has(f)));
        state.filteredData.count = filteredPeople.length;
        state.filteredData.results = filteredPeople;
    } else {
        state.filteredData = state.resultData;
    }
});


const getPeople = async () => {
    setIsLoading(true);
    const url = new URL("http://localhost:3000/api")
    const response = await fetch(url);
    const result:Result = await response.json();
    setResults(result);
    setFilterFilms(result.results);
    setFilteredResults();
    setIsLoading(false);
};

const setFilmFilterEnabled = (id:string) => {
    useUiStore.setState((state) => {
    const indexId = state.filter.films.findIndex(a=>a.id === id);
    state.filter.films[indexId].enabled = !state.filter.films[indexId].enabled;
   
    });
    setFilteredResults();
};

export const actions: UIActions = {
    setResults,
    getPeople,
    setFilmFilterEnabled,
};