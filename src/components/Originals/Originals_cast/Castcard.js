import React from "react"

const Castcard = ({ item: { cast_image, cast_name, film_name } }) => {
  return (
    <>
      <div className='ori_items'>
        <div className='ori_img'>
          <img src={cast_image} alt='Cast Image' />
        </div>
        <div className='ori_cast_details'>
          <p>{cast_name}</p>
          <p>{film_name}</p>
        </div>

      </div>
    </>
  )
}

export default Castcard