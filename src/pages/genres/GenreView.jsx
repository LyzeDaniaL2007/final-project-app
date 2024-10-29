import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./Genre.scss"; // Import SCSS styling

const GenreView = ({ genres, fetchMoviesByGenre, moviesByGenre, selectedGenre }) => {
  const navigate = useNavigate(); // Initialize navigate

  const handleMovieClick = (movieId) => {
    navigate(`/detail/${movieId}`); // Navigate to Detail page with movie ID
  };

  return (
    <div className="genre-container p-6 bg-white dark:bg-black dark:text-white">
      <h2>Movie Genres</h2>
      <ul className="genre-list">
        {genres.map((genre) => (
          <li
            key={genre.id}
            className="genre-item"
            onClick={() => fetchMoviesByGenre(genre.id)}
          >
            {genre.name}
          </li>
        ))}
      </ul>

      {selectedGenre && (
        <div className="movies-section">
          <h3>Movies in this Genre:</h3>
          <div className="movies-list">
            {moviesByGenre.map((movie) => (
              <div
                key={movie.id}
                className="movie-card"
                onClick={() => handleMovieClick(movie.id)} // Handle movie click
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="movie-poster"
                />
                <h4 className="movie-title">{movie.title}</h4>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default GenreView;
