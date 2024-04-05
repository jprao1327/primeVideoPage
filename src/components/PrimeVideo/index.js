import MovieSlider from '../MoviesSlider'
import './index.css'

const actionMo = 'ACTION'
const comedyMo = 'COMEDY'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMoviesList = moviesList.filter(
    movie => movie.categoryId === actionMo,
  )

  const comedyMoviesList = moviesList.filter(
    movie => movie.categoryId === comedyMo,
  )

  return (
    <div className="prime-video-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="prime-image"
      />
      <div className="movies-container">
        <h1 className="movies-heading">Action Movies</h1>
        <MovieSlider moviesList={actionMoviesList} />
        <h1 className="movies-heading">Comedy Movies</h1>
        <MovieSlider moviesList={comedyMoviesList} />
      </div>
    </div>
  )
}

export default PrimeVideo
