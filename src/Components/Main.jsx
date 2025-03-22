import "../Styles/main.css";

export default function Main({ movies }) {
  return (
    <div className="main">
      <MoviesList movies={movies} />
    </div>
  );
}

function MoviesList({ movies }) {
  return (
    <div className="movies__list">
      {movies.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} />
      ))}
    </div>
  );
}

function Movie({ movie }) {
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
