import React from "react"

const Gallerycard = ({ item: { gallery_image } }) => {
  return (
    <>
      <div className='items'>
        <div className='img'>
          <img src={gallery_image} alt='Gallery Image' />
        </div>
      </div>
    </>
  )
}

export default Gallerycard