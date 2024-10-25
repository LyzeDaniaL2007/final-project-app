import React, { useState } from "react";
import "./Detail.scss"; // Import the SCSS styling

const DetailMovie = ({
  movie,
  onRatingUpdate,
  handleStarClick,
  rating,
  postFavorite,
  deleteFavorite,
  isFavorite,
}) => {
  return (
    <div className="detail-container">
      <div className="detail-header">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="movie-poster"
        />
        <div className="movie-info">
          <h1 className="movie-title">{movie.title}</h1>
          <p className="movie-tagline">"{movie.tagline}"</p>
          <p className="movie-overview">{movie.overview}</p>
          <div className="movie-details">
            <p>
              <strong>Release Date:</strong> {movie.release_date}
            </p>
            <p>
              <strong>Rating:</strong> {movie.vote_average} / 10
            </p>
            <p>
              <strong>Genres:</strong>{" "}
              {movie.genres.map((genre) => genre.name).join(", ")}
            </p>
          </div>

          {/* Add Rating Section */}
          <div className="rating-section">
            <h3>Add Your Rating</h3>
            <div className="star-rating">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                <span
                  key={value}
                  className={`star ${value <= rating ? "filled" : ""}`}
                  onClick={() => handleStarClick(value)}
                >
                  ★
                </span>
              ))}
            </div>
            {isFavorite ? (
              <button onClick={deleteFavorite} className="submit-rating-button">
                Delete from favorite
              </button>
            ) : (
              <button onClick={postFavorite} className="submit-rating-button">
                Add to favorite
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailMovie;
