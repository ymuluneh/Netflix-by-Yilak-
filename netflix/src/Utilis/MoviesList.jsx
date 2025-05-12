import React, { useEffect, useState } from "react";
import instance from "./Axios";
import requests from "./Requists";

function MoviesList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await instance.get(requests.fetchTrending);
      setMovies(response.data.results);
    }
    fetchData();
  }, []);

  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>{movie.title || movie.name}</div>
      ))}
    </div>
  );
}

export default MoviesList;
