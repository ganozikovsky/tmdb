import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { isMovieOrTV } from "../utils/validations";
import Loading from "../commons/Loading";

export const Content = () => {
  const content = useSelector((state) => state.content);

  return (
    <>
      {content.length === 0 ? (
        <Loading />
      ) : (
        content.slice(0, 18).map((movie) => (
          <div key={movie.id} className="card" style={{ width: "16rem" }}>
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              className="rounded"
              alt="..."
            />
            <div className="card-body">
              <Link to={`/single/${isMovieOrTV(movie.media_type)}/${movie.id}`}>
                <h5 className="card-title fw-bold">
                  {movie.name ? movie.name : movie.title}
                </h5>
              </Link>
              <h6 className="card-subtitle mb-2 text-muted">
                {movie.media_type === "tv" ? "TV Show" : "Movie"}
              </h6>
              <p className="card-text fst-italic">
                {movie.overview.slice(0, 120) + "..."}
              </p>
              <Link to={`/single/${isMovieOrTV(movie.media_type)}/${movie.id}`}>
                <a className="btn btn-primary mt-5">Ver más...</a>
              </Link>
            </div>
          </div>
        ))
      )}
    </>
  );
};
