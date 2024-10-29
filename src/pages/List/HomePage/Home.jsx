import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import HomeView from "./HomeView";
import { useSearchParams } from "react-router-dom";
import { data } from "autoprefixer";

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [trailerMovies, setTrailerMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [isDaily, setIsDaily] = useState(true);

  const API_KEY = "00cb3a170a054e278fecc6aecd6c6885";

  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";

  // Fungsi untuk memperbarui search params di URL
  const updateSearchParams = (query) => {
    setSearchParams({ search: query });
  };

  const fetchMoviesBySearch = useCallback(async () => {
    if (!searchQuery) return;

    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchQuery}`
      );
      setTrendingMovies(response.data.results);
    } catch (error) {
      console.error("Error fetching movies by search:", error);
    }
  }, [searchQuery, API_KEY]);

  const fetchTrendingMovies = useCallback(async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/trending/movie/${
          isDaily ? "day" : "week"
        }?api_key=${API_KEY}`
      );
      setTrendingMovies(response.data.results);
    } catch (error) {
      console.error("Error fetching trending movies:", error);
    }
  }, [isDaily, API_KEY]);

  const fetchUpcomingMovies = useCallback(async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`
      );
      setUpcomingMovies(response.data.results);
    } catch (error) {
      console.error("Error fetching upcoming movies:", error);
    }
  }, [API_KEY]);

  const fetchTrailerMovies = useCallback(async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/550/videos?api_key=${API_KEY}`
      );
      setTrailerMovies(response.data.results);
    } catch (error) {
      console.error("Error fetching trailer movies:", error);
    }
  }, [API_KEY]);

  const fetchTopRatedMovies = useCallback(async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
      );
      setTopRatedMovies(response.data.results);
    } catch (error) {
      console.error("Error fetching top-rated movies:", error);
    }
  }, [API_KEY]);

  const fetchNowPlayingMovies = useCallback(async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
      );
      setNowPlayingMovies(response.data.results);
    } catch (error) {
      console.error("Error fetching now-playing movies:", error);
    }
  }, [API_KEY]);

  useEffect(() => {
    if (searchQuery) {
      fetchMoviesBySearch();
    } else {
      fetchTrendingMovies();
      fetchUpcomingMovies();
      fetchTrailerMovies();
      fetchTopRatedMovies();
      fetchNowPlayingMovies();
    }
  }, [
    searchQuery,
    fetchMoviesBySearch,
    fetchTrendingMovies,
    fetchUpcomingMovies,
    fetchTrailerMovies,
    fetchTopRatedMovies,
    fetchNowPlayingMovies,
  ]);

  const toggleTrendingType = () => {
    setIsDaily((prev) => !prev);
  };

  console.log(data)

  return (
    <div>
      <HomeView
        trendingMovies={trendingMovies}
        upcomingMovies={upcomingMovies}
        trailerMovies={trailerMovies}
        topRatedMovies={topRatedMovies}
        nowPlayingMovies={nowPlayingMovies}
        isDaily={isDaily}
        toggleTrendingType={toggleTrendingType}
        updateSearchParams={updateSearchParams} // Pass updateSearchParams as prop
      />
    </div>
  );
};

export default Home;
