import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import Loading from "../commons/Loading";
import { genresToString } from "../utils/validations";

import { addToFavorites } from "../store/user";

const SingleContent = () => {
  const { type, id } = useParams();
  const [content, setContent] = useState({});
  const dispatch = useDispatch();

  const fetchSingleContent = () => {
    axios.get(`/api/single/${type}/${id}`).then((r) => setContent(r.data));
  };

  const handleFavorites = (movie) => {
    dispatch(addToFavorites(movie)).then((data) => {
      if (data.error) alert(`Failed: ${data.error.message}.`);
      else alert(`Movie added to favorites`);
    });
  };

  useEffect(() => {
    fetchSingleContent();
  }, [id]);

  return !content.id ? (
    <Loading />
  ) : (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <img
            src={`https://image.tmdb.org/t/p/w500/${content.poster_path}`}
            alt="Poster del contenido"
            className="rounded-8 shadow-6-strong"
          />
        </div>
        <div className="col-8">
          <h1 className="fs-1 fw-bold">
            {content.name ? content.name : content.title}
          </h1>
          <h2 className="fs-3 fw-normal mt-3">{content.tagline}</h2>
          <h2 className="fs-2 fst-italic mt-3">
            {content.release_date
              ? content.release_date.slice(0, 4)
              : content.first_air_date.slice(0, 4)}
          </h2>
          <h2 className="fs-5 fst-italic mt-3">
            {genresToString(content.genres)}
          </h2>
          <h2 className="fs-5 fst-italic mt-3">{content.overview}</h2>
          <div className="ratio ratio-21x9 mt-3 mb-3">
            <iframe
              src={`https://www.youtube.com/embed/${content.videos.results[0].key}`}
              frameborder="1"
              title="Video"
            ></iframe>
          </div>
        </div>
        <button
          type="button"
          className="btn btn-warning mt-3"
          onClick={() => handleFavorites(content)}
        >
          Añadir a favoritos
        </button>
      </div>
    </div>
  );
};

export default SingleContent;
