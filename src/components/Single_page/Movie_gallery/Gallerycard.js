import React from "react"

const Gallerycard = ({ item: { images } }) => {
  const API_URL = process.env.REACT_APP_API_URL

  return (
    <>
      <div className='items'>
        <div className='img'>
          <img src={API_URL+'/public/upload/'+images} alt='Gallery Image' style={{ maxWidth: "100%" }} />
        </div>
      </div>
    </>
  )
}

export default Gallerycard