import Slider from 'react-slick'
import MovieItem from '../MovieItem'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const MovieSlider = props => {
  const settings = {
    dots: false,
    slidesToScroll: 1,
    slidesToShow: 4,
  }
  const {moviesList} = props

  return (
    <>
      <Slider {...settings}>
        {moviesList.map(item => (
          <MovieItem key={item.id} movieDetails={item} />
        ))}
      </Slider>
    </>
  )
}

export default MovieSlider
