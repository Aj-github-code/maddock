import React from "react"
import data from "../../News/News_All/NewsPopData.json"
import "./HomeNews.css"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export const HomeNews = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
  } 
  return (
    <>
    <div className="news-title">NEWS</div>

      <Slider style={{maxWidth:"99%", overflow:"hidden"}} {...settings}>
        {data.map((value) => {
          return (
            <div className='' style={{position:'relative'}} >
              <div className='img'>
                <img src={value.Image} alt='Gallery Image' className="news_slider"/>
              </div>
              <div className='details'>
                {value.Title}
              </div>
              {/* <img src={value.cover} alt='' className="news_slider"/> */}
              {/* <div className="image__overlay">
                <button className='movie-btn'>View</button>
              </div> */}
            </div>
          )
        })}
      </Slider>
    </>
  )
}
