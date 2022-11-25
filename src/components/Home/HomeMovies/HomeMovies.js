import React from 'react'
import "./HomeMovies.css"
import MovieData from './MovieData'

export const HomeMovies = () => {

  return (
    <>
    <div>
        <div className='movie-title'>MOVIES</div>
        <div className='movie-gallery'>
          {MovieData.map((item, index) => {
            return(
              <div className='pics' key={index}>
                <img src={item.Image} className="img-responsive" alt='' />
              </div>
            )
          })

          }

        </div>
        <button className='movie-btn'>View More</button>
    </div>
    </>
  )
}
