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
