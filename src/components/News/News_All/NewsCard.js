import React from "react"

const NewsCard = ({ item: { Image, Title } }) => {
  return (
    <>
      <div className='items' style={{position:'relative'}}>
        <div className='img' style={{ borderRadius:' 84px'}}>
          <img src={Image} alt='Gallery Image' />
          <div className='details' style={{ borderBottomRightRadius:' 20px', borderBottomLeftRadius:' 20px'}}>
            <span className="news_details" >{Title}</span>
          </div>
        </div>

      </div>
    </>
  )
}

export default NewsCard