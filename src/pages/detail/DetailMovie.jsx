import React, { useState } from "react";
import "./Detail.scss"; // Import the SCSS styling

const DetailMovie = ({ movie, onRatingUpdate }) => {
  const [rating, setRating] = useState(0); // State to store user input rating
  const API_KEY = "00cb3a170a054e278fecc6aecd6c6885";

  const submitRating = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movie.id}/rating?api_key=${API_KEY}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
            Authorization: `Bearer YOUR_ACCESS_TOKEN`, // Use appropriate authorization
          },
          body: JSON.stringify({ value: rating }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit rating");
      }

      const data = await response.json();

      // Call the rating update function passed from HomeView
      onRatingUpdate(movie.id, rating);
      alert("Rating submitted successfully!");
    } catch (error) {
      console.error("Error submitting rating:", error);
      alert("There was an error submitting your rating. Please try again.");
    }
  };

  const handleStarClick = (value) => {
    setRating(value);
    console.log(value);
  };

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
            <button onClick={submitRating} className="submit-rating-button">
              Submit Rating
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailMovie;
