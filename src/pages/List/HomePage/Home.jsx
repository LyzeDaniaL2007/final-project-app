import axios from "axios";
import React, { useEffect } from "react";

const Home = () => {
  // Trending   
    const ambilFilmTrending = async () => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/trending/all/week",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMGNiM2ExNzBhMDU0ZTI3OGZlY2M2YWVjZDZjNjg4NSIsIm5iZiI6MTcyODM1MDgwNS42NjU3ODUsInN1YiI6IjY3MDQ4NDFlNGIwYzViOWQ3MTY5YjZjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TcddCKV-vYsFNT4zFSM_PqsdgOMQElDbzTPsDXJ41VA",
        },
      }
    );
    const data = await response.data;
    console.log(data);
  };

  //    

  useEffect(()=> {
    ambilFilmTrending()
  }, [])
  
  return (
    <div className="">
        
    </div>
  )
};

export default Home;
