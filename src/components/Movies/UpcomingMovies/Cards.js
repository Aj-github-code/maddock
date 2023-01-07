import React from "react"
import PopularData from "./PopData"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const SampleNextArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='next'>
        <i className='fa fa-long-arrow-alt-right'></i>
      </button>
    </div>
  )
}
const SamplePrevArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='prev'>
        <i className='fa fa-long-arrow-alt-left'></i>
      </button>
    </div>
  )
}

const Cards = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow:1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  }
  return (
    <>
      <Slider {...settings} style={{display:"flex",alignItems:"center"}}>
        {PopularData.map((value) => {
          return (
            <>
              <div className='cards'>
                <div className='item'>
                  <div className='imgae'>
                    <img src={value.image} alt='' className="image_slide" />
                    
                  </div>
                  
                  <div className='Movie-details'>
                    <h3>{value.name}</h3>
                    <h2>
                      {value.date ? value.date : "Coming Soon"}
                    </h2>
                  </div>
                </div>
              </div>
            </>
          )
        })}
      </Slider>
    </>
  )
}

export default Cards