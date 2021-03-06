import React, { useEffect, useState } from "react";
import requests from "../requests";
import axios from "../axios";
import "./hero.css";


const base_url = 'https://image.tmdb.org/t/p/original/'
function Hero() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function getMovies() {
      const request = await axios.get(requests.fetchHorrorMovies);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    getMovies();
  }, []);
  console.log(movie)
  return (
    <header
      className="hero"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
        backgroundPosition: "center center",
        objectFit: "cover",
        height: "640px",
        position: "relative",
      }}
    >
      <div className="banner__contents container">
        <div className="row">
          <div className="col-md-7">
            <h1 className="banner__title">
              {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <h5 className="banner__description">{movie?.overview}</h5>
          </div>
        </div>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Hero;
