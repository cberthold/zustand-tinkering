import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { devtools } from 'zustand/middleware';

interface UIState {
    bears: number;
    loading: boolean;
}

interface UIActions {
    increase: (by: number) => void;
    randomIncrease: () => void;
}

const useUiStore = create<UIState>()(
    immer(devtools(
        (set) => ({
            bears: 0,
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

const increase = (by: number) => useUiStore.setState((state) => ({ bears: state.bears + by }));
const setIsLoading = (loading: boolean) => useUiStore.setState((state) => ({ loading: loading }));

const randomIncrease = async () => {
    setIsLoading(true);
    const url = new URL("https://www.randomnumberapi.com/api/v1.0/randomredditnumber?min=100&max=1000&count=1")
    const response = await fetch(url, { mode: 'no-cors'});
    await sleep(3000)
    setIsLoading(false);
    console.log(response);
    increase(1);
};

export const ACTIONS: UIActions = {
    increase,
    randomIncrease,
};

export default useUiStore;