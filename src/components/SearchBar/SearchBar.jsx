import "./SearchBar.scss";
import SearchIcon from "@mui/icons-material/Search";
import JSONDATA from "../../movie.json";
import { useState } from "react";

export default function SearchBar(props) {
  return (
    <div className="search-bar">
      <form action="#" onSubmit={(event) => event.preventDefault()}>
        <SearchIcon className="search-icon" />
        <input
          type="text"
          name="movie-search"
          id="movie-search"
          placeholder="Search"
          // when change update the movies
          onChange={(event) => props.setSearchValue(event.target.value)}
        />
      </form>
    </div>
  );
}
