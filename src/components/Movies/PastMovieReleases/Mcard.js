import React from "react"
import { Link } from "react-router-dom"
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css'

const Mcard = ({ item: { id, slug, images, name } }) => {
  const API_URL = process.env.REACT_APP_API_URL

  return (
    <>
      <div className='items'>
        <div className='mimg'>
          <Link to={`/movie/${slug}`} className='movie-link'>
          <LazyLoadImage src={API_URL+'/public/upload/'+images} alt='Movie Image' className="movie_img"/>
            <i className='fas fa-external-link-alt'></i>
          </Link>
        </div>
        <div className=''>
          <p>{name}</p>
        </div>

      </div>
    </>
  )
}

export default Mcard