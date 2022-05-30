import propTypes from "prop-types";
import { Link } from "react-router-dom";

const Movies = ({movies}) => {
    console.log(movies);
    return (
      <div>
        <h2> {movies.data.movie_count} movies exist </h2>
        {movies.data.movies.map(movie => (
        <div key={movie.id}>
          <h2><Link to={`/movie/${movie.id}`}>{movie.title}</Link></h2>
          <img src={movie.medium_cover_image} alt={movie.title}/>
          <p>{movie.summary}</p>
          <ul>
            {movie.genres.map(g=><li key={g}>{g}</li>)}
          </ul>
        </div>
        ))}
      </div>
    );
  }

Movies.propTypes = {
  movies: propTypes.object.isRequired
};

export default Movies;