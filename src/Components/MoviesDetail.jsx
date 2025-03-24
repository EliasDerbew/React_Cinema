import { useState, useEffect } from "react";
import StarRating from "./StarRating";
import Loading from "./Loading";

const key = "ccbce268";
export default function MoviesDetail({ movieId }) {
  const [detailMovie, setDetailMovie] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchingDetailMovie = async () => {
      setLoading(true);
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${key}&i=${movieId}`
      );
      const detailData = await response.json();
      setDetailMovie(detailData);
      console.log(detailData);
    };

    fetchingDetailMovie();
    setLoading(false);
  }, [movieId]);

  return (
    <di className="movie__detail">
      {loading ? (
        <Loading />
      ) : (
        <div className="detail">
          <div className="detail__info">
            <img src={detailMovie.Poster} alt="" />
            <div className="info">
              <div>
                <h2>{detailMovie.Title}</h2>
                <p>{`Year: ${detailMovie.Released}`}</p>
                <p>{`Run Time: ${detailMovie.Runtime}`}</p>
              </div>
              <p>{detailMovie.Plot}</p>
              <p>{`Director: ${detailMovie.Director}`}</p>
            </div>
          </div>
          <div className="starRating">
            <StarRating maxRating={10} defaultRating={detailMovie.imdbRating} />
          </div>
        </div>
      )}
    </di>
  );
}
