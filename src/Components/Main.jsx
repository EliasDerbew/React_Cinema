import "../Styles/main.css";

export default function Main({ movies, onHandleDetail }) {
  return (
    <div className="main">
      <MoviesList movies={movies} onHandleDetail={onHandleDetail} />
    </div>
  );
}

function MoviesList({ movies, onHandleDetail }) {
  return (
    <div className="movies__list">
      {movies.map((movie) => (
        <Movie
          movie={movie}
          onHandleDetail={onHandleDetail}
          key={movie.imdbID}
        />
      ))}
    </div>
  );
}

function Movie({ movie, onHandleDetail }) {
  return (
    <div>
      <ul>
        <li onClick={() => onHandleDetail(movie.imdbID)}>
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
