import { useEffect, useState } from "react";
import axios from "axios";
import RatedView from "./RatedView";

const Rated = () => {
  const [listRating, setListRate] = useState([]);

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

  useEffect(() => {
    ambilRating();
  }, []);

  return <RatedView data={listRating} />;
};

export default Rated;
