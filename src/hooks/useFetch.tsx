import { useState, useEffect } from "react";
import { isError } from "../helpers/isError";

function useFetch<TResponse>(url: string) {
  const [data, setData] = useState<TResponse>();
  const [isFetching, setIsFetching] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string>();

  useEffect(() => {
    const APICALL = async () => {
      try {
        const response = await fetch(url);
        setIsFetching(false);

        if (response.status === 200) {
          const responseData = await response.json();
          setData(responseData);
        } else if (response.status === 500) {
          setErrorMessage("Oops... something went wrong, try again 🤕");
        } else if (response.status === 418) {
          setErrorMessage(`418 I'm a \u{1FAD6} , silly`);
        }
      } catch (error) {
        setIsFetching(false);
        console.log(isError(error) ? error.message : "Unknown error!");
      }
    };
    APICALL();
  }, [url]);

  return { isFetching: isFetching, data: data, errorMessage: errorMessage };
}

export default useFetch;
