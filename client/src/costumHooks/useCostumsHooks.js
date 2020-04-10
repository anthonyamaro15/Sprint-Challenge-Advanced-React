import { useEffect, useState } from "react";
import axios from "axios";

export const useFetch = (url, initialValue) => {
  const [result, setResult] = useState(initialValue);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("data"));
    if (savedData) {
      setResult(savedData);
    }
  }, []);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        window.localStorage.setItem("data", JSON.stringify(res.data));
        setResult(res.data);
      })
      .catch((err) => console.log(err));
  }, [url]);

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
