import React from "react"

const NewsCard = ({ item: { Image, Title } }) => {
  return (
    <>
      <div className='items'>
        <div className='img'>
          <img src={Image} alt='Gallery Image' />
        </div>
        <div className='details'>
          <p>{Title}</p>
        </div>

      </div>
    </>
  )
}

export default NewsCard