import React from "react"

const Moviecard = ({ item: { cast_image, cast_name, film_name } }) => {
  return (
    <>
      <div className='items'>
        <div className='img'>
          <img src={cast_image} alt='Cast Image' />
        </div>
        <div className='cast_details'>
          <p>{cast_name}</p>
          <p>{film_name}</p>
        </div>

      </div>
    </>
  )
}

export default Moviecard