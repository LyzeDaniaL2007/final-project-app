import React, { useEffect, useState } from "react";
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
  const [trailer, setTrailer] = useState(null);
  const [cast, setCast] = useState([]);

  // Fetch trailer and cast data from TMDB
  useEffect(() => {
    const fetchAdditionalData = async () => {
      try {
        const apiKey = "00cb3a170a054e278fecc6aecd6c6885";
        const movieId = movie.id;

        // Fetch Trailer
        const trailerRes = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}&language=en-US`
        );
        const trailerData = await trailerRes.json();
        const officialTrailer = trailerData.results.find(
          (vid) => vid.type === "Trailer" && vid.site === "YouTube"
        );
        setTrailer(officialTrailer);

        // Fetch Cast
        const castRes = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`
        );
        const castData = await castRes.json();
        setCast(castData.cast.slice(0, 10)); // Show top 10 cast members
      } catch (error) {
        console.error("Failed to fetch additional data", error);
      }
    };

    fetchAdditionalData();
  }, [movie.id]);

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

          {/* Play Trailer Section */}
          {trailer && (
            <div className="trailer-section">
              <h3>Watch Trailer</h3>
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${trailer.key}`}
                title={trailer.name}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}

          {/* Cast Section */}
          <div className="cast-section">
            <h3>Top Cast</h3>
            <ul className="cast-list">
              {cast.map((actor) => (
                <li key={actor.id} className="cast-item">
                  <img
                    src={`https://image.tmdb.org/t/p/w185${actor.profile_path}`}
                    alt={actor.name}
                    className="cast-photo"
                  />
                  <p>{actor.name}</p>
                  <p className="actor-character">{actor.character}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailMovie;
