import { useMemo, useEffect, useRef } from 'react'
import debounce from 'lodash.debounce';

const useDebounce = (callback: React.DependencyList | undefined, debounceTimeout = 300) => {
  const ref = useRef<any>();

  useEffect(() => {
    ref.current = callback;
  }, [callback]);

  const debouncedCallback = useMemo(() => {
    const func = () => {
      ref.current?.();
    };

    return debounce(func, debounceTimeout);
  }, []);

  return debouncedCallback;
};

export default useDebounce;