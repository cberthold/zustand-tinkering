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
    const url = new URL("http://localhost:3000/api")
    const response = await fetch(url);
    const j = await response.json();
    await sleep(3000)
    setIsLoading(false);
    console.log(j);
    increase(j.randomNumber[0]);
};

export const ACTIONS: UIActions = {
    increase,
    randomIncrease,
};

export default useUiStore;