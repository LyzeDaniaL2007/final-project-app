import { useEffect, useState } from "react";
import axios from "axios";
import DetailMovie from "./DetailMovie";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [isFavorite, setFavorite] = useState(false);
  const [favoriteList, setFavoriteList] = useState([]);
  const [rating, setRating] = useState(0); // State to store user input rating
  const [listRating, setListRate] = useState([]);
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

  const filterRatingDetail = (array) => {
    const data = array.filter((item) => item.id == id);
    if (data.length < 1) {
      console.log("not found: " + 0);
      return 0;
    }
    console.log("found: " + data[0].rating);
    return data[0].rating;
  };

  const filterFavoriteDetail = (array) => {
    const data = array.filter((item) => item.id == id);
    if (data.length < 1) {
      console.log("false");
      return false;
    }
    console.log(true);
    return true;
  };

  const ambilRating = async () => {
    const url = "https://api.themoviedb.org/3/account/null/rated/movies";
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMGNiM2ExNzBhMDU0ZTI3OGZlY2M2YWVjZDZjNjg4NSIsIm5iZiI6MTcyOTg2NzE0Ny4xMjU0Niwic3ViIjoiNjcwNDg0MWU0YjBjNWI5ZDcxNjliNmM4Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.axd07yXj4yPEiKiA_ysxObCiI6eF2ll8glK4Oq87Vso",
        },
      });
      // console.log(response.data.results);
      setListRate(response.data.results);
    } catch (error) {
      console.log("Error fetching rating:", error.message);
    }
  };

  const ambilFavorit = async () => {
    const url = "https://api.themoviedb.org/3/account/null/favorite/movies";
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMGNiM2ExNzBhMDU0ZTI3OGZlY2M2YWVjZDZjNjg4NSIsIm5iZiI6MTcyOTg2NzE0Ny4xMjU0Niwic3ViIjoiNjcwNDg0MWU0YjBjNWI5ZDcxNjliNmM4Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.axd07yXj4yPEiKiA_ysxObCiI6eF2ll8glK4Oq87Vso",
        },
      });
      // console.log(response.data.results);
      setFavoriteList(response.data.results);
    } catch (error) {
      console.log("Error fetching rating:", error.message);
    }
  };

  const postFavorite = async () => {
    const url = "https://api.themoviedb.org/3/account/null/favorite";
    const body = { media_type: "movie", media_id: id, favorite: true };
    try {
      const res = await axios.post(url, body, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMGNiM2ExNzBhMDU0ZTI3OGZlY2M2YWVjZDZjNjg4NSIsIm5iZiI6MTcyOTg2NzE0Ny4xMjU0Niwic3ViIjoiNjcwNDg0MWU0YjBjNWI5ZDcxNjliNmM4Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.axd07yXj4yPEiKiA_ysxObCiI6eF2ll8glK4Oq87Vso",
        },
      });
      setFavorite(true);
    } catch (error) {
      console.log("Error submitting rating:", error.message);
    }
  };

  const deleteFavorite = async () => {
    const url = "https://api.themoviedb.org/3/account/null/favorite";
    const body = { media_type: "movie", media_id: id, favorite: false };
    try {
      const res = await axios.post(url, body, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMGNiM2ExNzBhMDU0ZTI3OGZlY2M2YWVjZDZjNjg4NSIsIm5iZiI6MTcyOTg2NzE0Ny4xMjU0Niwic3ViIjoiNjcwNDg0MWU0YjBjNWI5ZDcxNjliNmM4Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.axd07yXj4yPEiKiA_ysxObCiI6eF2ll8glK4Oq87Vso",
        },
      });
      setFavorite(false);
    } catch (error) {
      console.log("Error submitting rating:", error.message);
    }
  };

  const postRating = async (rating) => {
    const url = `https://api.themoviedb.org/3/movie/${id}/rating`;
    const body = {
      value: rating,
    };
    try {
      const res = await axios.post(url, body, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMGNiM2ExNzBhMDU0ZTI3OGZlY2M2YWVjZDZjNjg4NSIsIm5iZiI6MTcyOTg2NzE0Ny4xMjU0Niwic3ViIjoiNjcwNDg0MWU0YjBjNWI5ZDcxNjliNmM4Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.axd07yXj4yPEiKiA_ysxObCiI6eF2ll8glK4Oq87Vso",
        },
      });
      console.log(res.data);
    } catch (error) {
      console.log("Error submitting rating:", error.message);
    }
  };

  const handleStarClick = (value) => {
    setRating(value);
    postRating(value);
    console.log(value);
  };

  useEffect(() => {
    ambilRating();
    ambilFavorit();
  }, []);

  useEffect(() => {
    if (listRating.length > 0) {
      setRating(filterRatingDetail(listRating));
    }
  }, [listRating]);

  useEffect(() => {
    if (favoriteList.length > 0) {
      console.log(favoriteList);
      setFavorite(filterFavoriteDetail(favoriteList));
    }
  }, [favoriteList]);

  useEffect(() => {
    console.log(isFavorite);
  }, [isFavorite]);

  useEffect(() => {
    if (!id) {
      return;
    }
    fetchMovieDetails(id);
  }, [id]);

  return (
    <div>
      {movie ? (
        <DetailMovie
          isFavorite={isFavorite}
          postFavorite={postFavorite}
          deleteFavorite={deleteFavorite}
          rating={rating}
          handleStarClick={handleStarClick}
          movie={movie}
        />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Detail;
