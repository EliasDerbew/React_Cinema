import { useEffect, useState } from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import Loading from "./Components/Loading";
import ErrorMessage from "./Components/ErrorMessage";
import MoviesDetail from "./Components/MoviesDetail";

import "./App.css";

const key = "ccbce268";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchQuary, setSearchQuary] = useState("batman");
  const [selectedId, setSelectedId] = useState(null);

  const handleDetail = function (id) {
    setSelectedId((selectedId) => (selectedId === id ? null : id));
  };

  useEffect(() => {
    // const controller = new AbortController();

    const FetchedMovies = async function () {
      try {
        setIsLoading(true);
        setError("");

        const response = await fetch(
          `http://www.omdbapi.com/?apikey=${key}&s=${searchQuary}}`
          // { signal: controller.signal }
        );

        if (!response.ok) throw new Error("Something Went Wrong . . .");

        const data = await response.json();

        if (data.Response === "False") throw new Error("Movies Not Found");

        setMovies(data.Search);
        console.log(data.Search);
        setError("");
      } catch (err) {
        console.error(err.message);
        if (err.message !== "AbortError") {
          setError(err.message);
        }
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    FetchedMovies();

    // return function () {
    //   controller.abort();
    // };
  }, [searchQuary]);
  return (
    <div className="app">
      <Header search={searchQuary} onSearch={setSearchQuary} />
      <div className="main__body">
        {isLoading && <Loading />}
        {!isLoading && !error && (
          <Main movies={movies} onHandleDetail={handleDetail} />
        )}
        {error && <ErrorMessage error={error} />}

        {selectedId === null ? "" : <MoviesDetail movieId={selectedId} />}
      </div>
      <Footer />
    </div>
  );
}
