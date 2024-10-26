import React from "react";
import { Link } from "react-router-dom";
import "./Favorites.scss"; // Import SCSS styling

const FavoritesView = ({ data }) => {
  if (data.length === 0) {
    return <p className="no-favorites">You have no favorite movies yet.</p>;
  }

  return (
    <div className="favorites-container">
      <h1>Your Favorite Movies</h1>
      <div className="favorites-grid">
        {data.map((movie) => (
          <div key={movie.id} className="favorite-card">
            <Link to={`/detail/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title}
                className="favorite-poster"
              />
            </Link>
            <div className="favorite-info">
              <h2 className="favorite-title">{movie.title}</h2>
              <p className="favorite-date">Released: {movie.release_date}</p>
              <p className="favorite-rating">
                Rating: {movie.vote_average} / 10
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesView;
