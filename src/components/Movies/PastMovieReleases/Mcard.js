import React from "react"
import { Link } from "react-router-dom"

const Mcard = ({ item: { id, slug, images, name } }) => {
  return (
    <>
      <div className='items'>
        <div className='img'>
          <img src={'http://127.0.0.1:8000/upload/'+images} alt='Movie Image' />
          <Link to={`/singlepage/${id}/${slug}`} className='movie-link'>
            <i className='fas fa-external-link-alt'></i>
          </Link>
        </div>
        <div className='details'>
          <p>{name}</p>
        </div>

      </div>
    </>
  )
}

export default Mcard