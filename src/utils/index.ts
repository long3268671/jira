import { useEffect, useState } from "react";

export const isFalsy = (value: unknown) => (value === 0 ? false : !value);
export function cleanObject(param: object) {
  let search = { ...param };
  Object.keys(search).forEach((item) => {
    // @ts-ignore
    if (isFalsy(search[item])) {
      // @ts-ignore
      delete search[item];
    }
  });
  return search;
}
export const useMount = (callBack: () => void) => {
  useEffect(() => {
    callBack();
  }, []);
};
export const useDebounce = <T>(value: T, delay: number) => {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    let timeOut = setTimeout(() => {
      setDebounceValue(value);
    }, delay);
    return () => clearTimeout(timeOut);
  }, [value, delay]);
  return debounceValue;
};

export const useArray = <T>(user: T[]) => {
  const [value, setValue] = useState(user);
  const clear = () => {
    setValue([]);
  };
  const removeIndex = (index: number) => {
    let list = [...value];
    list.splice(index, 1);
    setValue(list);
  };
  const add = (param: T) => {
    setValue((value) => [...value, param]);
  };
  return {
    value,
    clear,
    removeIndex,
    add,
  };
};
