import React from "react"

const Moviecard = ({ item: { image, name, film_name } }) => {
  const API_URL = process.env.REACT_APP_API_URL

  return (
    <>
      <div className='items'>
        <div className='img'>
          <img src={API_URL+'/public/upload/'+image} alt='Cast Image' />
        </div>
        <div className='cast_details'>
          <p>{name}</p>
          <p>{film_name}</p>
        </div>

      </div>
    </>
  )
}

export default Moviecard