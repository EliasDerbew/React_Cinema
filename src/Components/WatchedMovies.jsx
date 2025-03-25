import { useState, useEffect } from "react";

const key = "ccbce268";
export default function WatchedMovies() {
  const [watched, setWatched] = useState([]);

  useEffect(() => {
    const FetchingWatched = async function () {
      const res = await fetch(`http://www.omdbapi.com/?apikey=${key}&s=inter`);
      const data = await res.json();
      setWatched(data.Search);
    };

    FetchingWatched();
  }, []);
  return (
    <div>
      <div className="watched__title">
        <h1>Watched Movies</h1>
      </div>
      <div className="movies__list">
        {watched.map((movie) => (
          <WatchedList movie={movie} />
        ))}
      </div>
    </div>
  );
}

function WatchedList({ movie }) {
  return (
    <div>
      <ul>
        <li>
          <img src={movie.Poster} alt="" />
          <div>
            <h2 className="movie__title">{movie.Title}</h2>
            <div className="year__type">
              <p>Year {movie.Year}</p>
              <p className="type">{movie.Type}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
