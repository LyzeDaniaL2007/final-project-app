import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HomeView.scss";

const HomeView = ({
  trendingMovies,
  upcomingMovies,
  nowPlayingMovies,
  isDaily,
  toggleTrendingType,
}) => {
  const [headerImage, setHeaderImage] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [topRatedMovies, setTopRatedMovies] = useState([]); // State for top-rated movies

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 2,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  useEffect(() => {
    const fetchHeaderImage = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/collection/10/images?api_key=00cb3a170a054e278fecc6aecd6c6885"
      );
      const data = await response.json();
      setHeaderImage(data.posters[0]?.file_path);
    };

    const fetchTopRatedMovies = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=00cb3a170a054e278fecc6aecd6c6885&language=en-US&page=1"
      );
      const data = await response.json();
      setTopRatedMovies(data.results); // Update state with top-rated movies
    };

    fetchHeaderImage();
    fetchTopRatedMovies(); // Fetch top-rated movies when component mounts
  }, []);

  const handleToggleTrending = (type) => {
    setIsAnimating(true);
    toggleTrendingType(type);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <div className="p-6 bg-white dark:bg-black dark:text-white">
      <div
        className="hero-section"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${headerImage})`,
        }}
      >
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-heading">
              Welcome to Fun Movie<span className="dot">.</span>
            </h1>
            <p className="hero-subtext">Hopes You all Enjoy it</p>
          </div>
        </div>
      </div>

      <div className="section-header">
        <h3>
          <b>Trending Movies</b>
        </h3>
        <div className="toggle-buttons">
          <button
            className={`toggle-button ${isDaily ? "active" : ""}`}
            onClick={() => handleToggleTrending(true)}
          >
            Today
          </button>
          <button
            className={`toggle-button ${!isDaily ? "active" : ""}`}
            onClick={() => handleToggleTrending(false)}
          >
            This Week
          </button>
        </div>
      </div>

      <div
        className={`slider-container ${isAnimating ? "fade-out" : "fade-in"}`}
      >
        <Slider {...sliderSettings}>
          {trendingMovies.map((movie) => (
            <Link to={`/detail/${movie.id}`} key={movie.id}>
              {" "}
              {/* Link to detail page */}
              <div className="movie-card px-3">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
                <div className="movie-info">
                  <h3 className="line-clamp-1" >{movie.title}</h3>
                  <p>{new Date(movie.release_date).toLocaleDateString()}</p>
                  <div className="rating-badge">
                    <span>{Math.round(movie.vote_average * 10)}%</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </Slider>
      </div>

      <div className="section-header">
        <h3>
          <b>Upcoming Movies</b>
        </h3>
      </div>
      <div className="slider-container">
        <Slider {...sliderSettings}>
          {upcomingMovies.map((movie) => (
            <Link to={`/detail/${movie.id}`} key={movie.id}>
              {" "}
              {/* Link to detail page */}
              <div className="movie-card px-3">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
                <div className="movie-info">
                  <h3>{movie.title}</h3>
                  <p>{new Date(movie.release_date).toLocaleDateString()}</p>
                </div>
              </div>
            </Link>
          ))}
        </Slider>
      </div>

      <div className="section-header">
        <h3>
          <b>Top Rated Movies</b>
        </h3>
      </div>
      <div className="slider-container">
        <Slider {...sliderSettings}>
          {topRatedMovies.map((movie) => (
            <Link to={`/detail/${movie.id}`} key={movie.id}>
              {" "}
              {/* Link to detail page */}
              <div className="movie-card px-3">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
                <div className="movie-info">
                  <h3 className="line-clamp-1">{movie.title}</h3>
                  <p>{new Date(movie.release_date).toLocaleDateString()}</p>
                  <div className="rating-badge">
                    <span>{Math.round(movie.vote_average * 10)}%</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </Slider>
      </div>

      <div className="section-header">
        <h3>
          <b>Now Playing Movies</b>
        </h3>
      </div>
      <div className="slider-container">
        <Slider {...sliderSettings}>
          {nowPlayingMovies.map((movie) => (
            <Link to={`/detail/${movie.id}`} key={movie.id}>
              {" "}
              {/* Link to detail page */}
              <div className="movie-card px-3">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
                <div className="movie-info">
                  <h3 className="line-clamp-1">{movie.title}</h3>
                  <p>{new Date(movie.release_date).toLocaleDateString()}</p>
                  <div className="rating-badge">
                    <span>{Math.round(movie.vote_average * 10)}%</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HomeView; 