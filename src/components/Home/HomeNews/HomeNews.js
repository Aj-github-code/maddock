import React from "react"
import data from "./data"
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
            <div className='' >
              <img src={value.cover} alt='' className="news_slider"/>
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
