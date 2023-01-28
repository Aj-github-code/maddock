import React from "react"

const Gallerycard = ({ item: { gallery_image } }) => {
  return (
    <>
      <div className='items' style={{padding:'10px'}}>
        <div className='img'>
          <img src={gallery_image} alt='Gallery Image' style={{ maxWidth: "100%" }}/>
        </div>
      </div>
    </>
  )
}

export default Gallerycard