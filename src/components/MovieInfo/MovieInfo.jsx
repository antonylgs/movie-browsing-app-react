import "./MovieInfo.scss";

export default function MovieInfo(props) {
  // indicate if there is ratings avalaible or not
  let ratings = "";
  if (props.selectedMovie.Ratings.length >= 1) {
    ratings = props.selectedMovie.Ratings[0].Value;
  } else {
    ratings = "No rating available for this movie";
  }

  return (
    <div className="movie-info">
      <div className="movie-header">
        <img src={props.selectedMovie.Poster} alt="" />
        <div className="movie-header-right">
          <h2 className="movie-title">{props.selectedMovie.Title}</h2>
          <p className="movie-note">{ratings}</p>
        </div>
      </div>
      <p className="movie-description">{props.selectedMovie.Plot}</p>
    </div>
  );
}
