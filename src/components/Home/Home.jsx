import React, { useEffect, useState } from "react";
import MovieListing from "../MovieListing/MovieListing";
import { useDispatch } from "react-redux";
import { fetchAsyncMovies, fetchAsyncShows } from "../../features/movies/movieSlice";
import Loader from "../Loader/Loader"; // Import the Loader component

const Home = () => {
  const dispatch = useDispatch();
  const movieText  = "Superman";
  const showText = "Friends";

  const [loading, setLoading] = useState(true); // State to manage loading

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Set loading to true before dispatching actions
      await dispatch(fetchAsyncMovies(movieText));
      await dispatch(fetchAsyncShows(showText));
      setLoading(false); // Set loading to false after data is fetched
    };

    fetchData();
  }, [dispatch, movieText, showText]);

  return (
    <div>
      {loading ? ( // Conditional rendering based on loading state
        <Loader />
      ) : (
        <>
          <div className="banner-img"></div>
          <MovieListing />
        </>
      )}
    </div>
  );
};

export default Home;
