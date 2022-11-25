import React from 'react'
import Footer from '../../../common/Footer/Footer'
import HeadTitle from '../../../common/HeadTitle/HeadTitle'
import MovieSlider from '../MovieSlider/MovieSlider'
import { PastMovieReleases } from '../PastMovieReleases/PastMovieReleases'
import UpcomingMovies from '../UpcomingMovies/UpcomingMovies'

function Movies() {
  return (
    <>
      {/* <div className='container1'> */}

        <HeadTitle/>
        <MovieSlider/>
        <UpcomingMovies/>
        <PastMovieReleases/>
        <Footer/>
      {/* </div> */}
    </>
  )
}
export default Movies