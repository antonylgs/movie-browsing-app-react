import "./MovieList.scss";
import JSONDATA from "../../movie.json";

export default function MovieList(props) {
  return (
    <div className="movie-list">
      <ul>
        {props.movies.map((movie, index) => {
          // if the movie has a title, an ID and a poster then include it inside the movie list then include it in movie search list
          if (
            movie.Title != "N/A" &&
            movie.imdbID != "N/A" &&
            movie.Poster != "N/A"
          )
            return (
              <li onClick={() => props.getSelectedMovie(movie.imdbID)}>
                {movie.Title}
              </li>
            );
        })}
      </ul>
    </div>
  );
}
