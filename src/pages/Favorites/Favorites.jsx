import { useEffect, useState } from "react";
import FavoritesView from "./FavoritesView";
import axios from "axios";
import { data } from "autoprefixer";

const Favorites = () => {
  const [favoriteList, setFavoriteList] = useState([]);

  const ambilFavorit = async () => {
    const url = "https://api.themoviedb.org/3/account/null/favorite/movies";
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMGNiM2ExNzBhMDU0ZTI3OGZlY2M2YWVjZDZjNjg4NSIsIm5iZiI6MTcyOTg2NzE0Ny4xMjU0Niwic3ViIjoiNjcwNDg0MWU0YjBjNWI5ZDcxNjliNmM4Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.axd07yXj4yPEiKiA_ysxObCiI6eF2ll8glK4Oq87Vso",
        },
      });
      console.log(response.data.results);
      setFavoriteList(response.data.results);
    } catch (error) {
      console.log("Error fetching rating:", error.message);
    }
  };

  useEffect(() => {
    ambilFavorit();
  }, []);

   console.log(data)

  return <FavoritesView data={favoriteList} />;
};

export default Favorites;
