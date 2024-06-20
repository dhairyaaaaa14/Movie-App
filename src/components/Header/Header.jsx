import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAsyncMovies, fetchAsyncShows } from "../../features/movies/movieSlice";
import user from "../../images/user.png";
import "./Header.scss";

const Header = () => {
  const [term, setTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();
    if(term === "") return "hi"
    setLoading(true);
    await dispatch(fetchAsyncMovies(term));
    await dispatch(fetchAsyncShows(term));
    setLoading(false);
    setTerm("");
  };

  return (
    <div className="header">
      <div className="logo">
        <Link to="/" style={{ color: "white" }}>Moviefy App</Link>
      </div>

      <div className="search-bar">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={term}
            placeholder="Search Movies or Shows"
            onChange={(e) => setTerm(e.target.value)}
            disabled={loading}
          />
          <button type="submit" disabled={loading}>
            {loading ? <i className="fa fa-spinner fa-spin"></i> : <i className="fa fa-search"></i>}
          </button>
        </form>
      </div>

      <div className="user-image">
        <img src={user} alt="User" />
      </div>
    </div>
  );
};

export default Header;
