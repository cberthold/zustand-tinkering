import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { devtools } from 'zustand/middleware';

import { enableMapSet } from 'immer';
import { UIState } from './types';

enableMapSet();


const useUiStore = create<UIState>()(
    immer(devtools(
        (set) => ({
            resultData: {
                count: 0,
                results: [],
            },
            filter: {
                films: [],
                filmNames: new Set(),
            },
            loading: false,
            filteredData: {
                count: 0,
                results: [],
            }
        })
    ))
)

const sleep = (interval: number) => {
    const promise = new Promise((resolveInner) => {
        setTimeout(resolveInner, interval);
      });
      return promise;
} 




export default useUiStore;