import { useEffect, useState } from "react";
import "./App.scss";
import MovieInfo from "./components/MovieInfo/MovieInfo";
import MovieList from "./components/MovieList/MovieList";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  // movies to display in movie list
  const [movies, setMovies] = useState([]);

  // search define by the search bar
  const [searchValue, setSearchValue] = useState("");

  // movie clicked in the movie list
  const [selectedMovie, setSelectedMovie] = useState({
    // use a default film to display on website
    Title: "Guardians of the Galaxy Vol. 2",
    Year: "2017",
    Rated: "PG-13",
    Released: "05 May 2017",
    Runtime: "136 min",
    Genre: "Action, Adventure, Comedy",
    Director: "James Gunn",
    Writer: "James Gunn, Dan Abnett, Andy Lanning",
    Actors: "Chris Pratt, Zoe Saldana, Dave Bautista",
    Plot: "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego.",
    Language: "English",
    Country: "United States",
    Awards: "Nominated for 1 Oscar. 15 wins & 59 nominations total",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
    Ratings: [
      {
        Source: "Internet Movie Database",
        Value: "7.6/10",
      },
      {
        Source: "Rotten Tomatoes",
        Value: "85%",
      },
      {
        Source: "Metacritic",
        Value: "67/100",
      },
    ],
    Metascore: "67",
    imdbRating: "7.6",
    imdbVotes: "645,330",
    imdbID: "tt3896198",
    Type: "movie",
    DVD: "22 Aug 2017",
    BoxOffice: "$389,813,101",
    Production: "N/A",
    Website: "N/A",
    Response: "True",
  });

  // function to get a movie informations by making an http request to imdb api when clicked on it in movie list
  const getSelectedMovie = async (imdbid) => {
    const url = `http://www.omdbapi.com/?i=${imdbid}&apikey=f7b06ed2`;

    const response = await fetch(url);
    const responseJson = await response.json();

    // if there is movies corresponding to the search
    if (responseJson) {
      // if there is no plat available
      if (responseJson.Plot == "N/A") {
        responseJson.Plot = "No plot available";
      }
      setSelectedMovie(responseJson);
    }
  };

  // function to search movies with the omdb api
  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=f7b06ed2`;

    const response = await fetch(url);
    const responseJson = await response.json();

    // if there is movies corresponding to the search
    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
    // otherwise just empty movie list
    else {
      setMovies([]);
    }
  };

  // get called on the first render
  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  return (
    <div className="app">
      <div className="left">
        <SearchBar setSearchValue={setSearchValue} />
        <MovieList movies={movies} getSelectedMovie={getSelectedMovie} />
      </div>
      <div className="right">
        <MovieInfo selectedMovie={selectedMovie} />
      </div>
    </div>
  );
}

export default App;
