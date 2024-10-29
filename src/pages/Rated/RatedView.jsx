import React from "react";
import { Link } from "react-router-dom";
import "./Rated.scss"; // Import styling SCSS

const RatedView = ({ data }) => {
  if (!data || data.length === 0) {
    return <div className="rated-empty">No rated movies found.</div>;
  }

  return (
    <div className="rated-container p-6 bg-white dark:bg-black dark:text-white">
      <h2 className="rated-title">Your Rated Movies</h2>
      <div className="rated-list">
        {data.map((movie) => (
          <div key={movie.id} className="rated-item">
            <Link to={`/detail/${movie.id}`} className="rated-link">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="rated-poster"
              />
              <div className="rated-info">
                <h3 className="rated-movie-title">{movie.title}</h3>
                <p className="rated-rating">
                  Your Rating: <strong>{movie.rating}</strong> / 10
                </p>
                <p className="rated-release">
                  Release Date: {movie.release_date}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RatedView;
