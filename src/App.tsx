import "./App.css";
import { Character } from "./types/Character";
import useFetch from "./hooks/useFetch";

function App() {
  const { isFetching, data, errorMessage } = useFetch<Character>(
    "https://swapi.dev/api/people/1"
  );

  return (
    <>
      {isFetching && <h1> "...loading"</h1>}
      <div>{data && <h1>{data.name}</h1>}</div>
      {errorMessage && <h3>{errorMessage}</h3>}
    </>
  );
}

export default App;
