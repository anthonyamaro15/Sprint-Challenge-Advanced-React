import { useEffect, useState } from "react";
import axios from "axios";

export const useFetch = (url, initialValue) => {
  const [result, setResult] = useState(initialValue);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        setResult(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return result;
};

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  const setValue = (value) => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
};
