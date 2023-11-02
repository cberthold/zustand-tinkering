export type PredicateFn<T> = (value: T, index?: number) => boolean;
export type ProjectionFn<T> = (value: T, index?: number) => T;

const isTrue = <T>(): PredicateFn<T> => {
    return (value) => true;
}

const isFalse = <T>(): PredicateFn<T> => {
    return (value) => false;
};

const or = <T>(...predicates: PredicateFn<T>[]): PredicateFn<T> => {
  return (value) => predicates.some((predicate) => predicate(value));
};

const and = <T>(...predicates: PredicateFn<T>[]): PredicateFn<T> => {
  return (value) => predicates.every((predicate) => predicate(value));
};

const not = <T>(...predicates: PredicateFn<T>[]): PredicateFn<T> => {
  return (value) => predicates.every((predicate) => !predicate(value));
};



export {
    isTrue,
    isFalse,
    or,
    and,
    not,
}