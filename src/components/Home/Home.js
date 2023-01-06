import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import movieApi from "../../services/apis/movieApi";
import { APIKey } from "../../services/apis/movieApiKey";
import { useDispatch } from "react-redux";
import { addMovie } from "../../movies/movieSlice";
export default function Home() {
  const movieText = "Harry";
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await movieApi
        .get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
        .catch((err) => console.log("Error", err));
      dispatch(addMovie(response.data));
      console.log("Response from api", response);
    };
    fetchMovies();
  }, []);
  return (
    <>
      <div className="banner-img"></div>
      <MovieListing />
    </>
  );
}
