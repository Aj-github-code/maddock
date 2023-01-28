import React from "react"
import data from "../../News/News_All/NewsPopData.json"
import "./HomeNews.css"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Link } from "react-router-dom"

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
      <div className="slick_slider">

      <Slider style={{maxWidth:"99%", overflow:"hidden", marginBottom:'3%'}} {...settings}>
        {data.map((value) => {
          return (
            <>
            <div class="img_containers" style={{height:"100%"}} >
                <img src={value.Image} alt='Gallery Image' className="news_slider"/>
          
              <div className='detailss'>
               <span className="news_detail" style={{color:'white', width:"90%", position:'absolute', bottom:"35px"}}> {value.Title}</span>
              </div>
              {/* <img src={value.cover} alt='' className="news_slider"/> */}
              {/* <div className="image__overlay">
                <button className='movie-btn'>View</button>
              </div> */}
            </div>
            </>
          )
        })}
      </Slider>

      <div className="slick_slider_button">
        <Link to={'news'}><button className='movie-btn' style={{width:'100%'}} >View More</button></Link>
      </div>
        </div>
    </>
  )
}
