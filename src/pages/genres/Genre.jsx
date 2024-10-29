// Genre.jsx
import React, { useEffect, useState } from "react";
import GenreView from "./GenreView"; // Import GenreView untuk tampilan
import { data } from "autoprefixer";

const Genre = () => {
  const [genres, setGenres] = useState([]);
  const [moviesByGenre, setMoviesByGenre] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const apiKey = "00cb3a170a054e278fecc6aecd6c6885"; // Ganti dengan API key Anda

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`
        );
        const data = await response.json();
        setGenres(data.genres);
      } catch (error) {
        console.error("Failed to fetch genres", error);
      }
    };

    fetchGenres();
  }, [apiKey]);

  const fetchMoviesByGenre = async (genreId) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreId}&language=en-US`
      );
      const data = await response.json();
      setMoviesByGenre(data.results);
      setSelectedGenre(genreId);
    } catch (error) {
      console.error("Failed to fetch movies", error);
    }
  };

  console.log(data)

  return (
    <div>
      <GenreView
        genres={genres}
        fetchMoviesByGenre={fetchMoviesByGenre}
        moviesByGenre={moviesByGenre}
        selectedGenre={selectedGenre}
      />
    </div>
  );
};

export default Genre;
