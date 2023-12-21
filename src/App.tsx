import { useEffect, useState } from "react";
import "./App.css";
import { Character } from "./types/Character";

function App() {
  const [data, setData] = useState<Character>();
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const APICALL = async () => {
      try {
        const response = await fetch("https://swapi.dev/api/people/1");

        if (response.status === 200) {
          const responseData = await response.json();
          setData(responseData);
        } else if (response.status === 500) {
          setErrorMessage("Oops... something went wrong, try again 🤕");
        } else if (response.status === 418) {
          setErrorMessage("418 I'm a teapot 🫖, silly");
        }
      } catch (error) {
        console.log(error);
      }
    };
    APICALL();
  }, []);

  return (
    <>
      <div>{data && <h1>{data.name}</h1>}</div>
      {errorMessage && <h3>{errorMessage}</h3>}
    </>
  );
}

export default App;
