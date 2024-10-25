import React, { useEffect, useState } from "react";
import axios from "axios";
import DetailMovie from "./DetailMovie";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const API_KEY = "00cb3a170a054e278fecc6aecd6c6885";

  const fetchMovieDetails = async (movieId) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
      );
      setMovie(response.data);
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  };

  useEffect(() => {
    if (!id) {
      return;
    }
    console.log(id.toString());
    fetchMovieDetails(id);
  }, [id]);

  useEffect(() => {
    console.log(movie);
  }, [movie]);

  return (
    <div>{movie ? <DetailMovie movie={movie} /> : <div>Loading...</div>}</div>
  );
};

export default Detail;
