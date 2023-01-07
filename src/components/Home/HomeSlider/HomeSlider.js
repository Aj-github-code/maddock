import React from "react";
import './HomeSlider.css'
import { Carousel } from "react-bootstrap";
import img1 from "../../../images/HomeSlider_001.png";
import img2 from "../../../images/HomeSlider_002.png";
import img3 from "../../../images/HomeSlider_003.png";
import img4 from "../../../images/HomeSlider_004.png";
import { Link } from "react-router-dom";

const Products = () => {
    return(
    <Carousel>
      <Carousel.Item interval={1000}>
      <Link to='movies'><img  className="d-block w-100 slider-img"  src={img1}  /></Link>
        
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <Link to='movies'><img className="d-block w-100 slider-img" src={img2} /></Link>
        
      </Carousel.Item>
      <Carousel.Item>
        <Link to='movies'><img className="d-block w-100 slider-img" src={img3} /></Link>
       
      </Carousel.Item>
      <Carousel.Item>
        <Link to='movies'><img className="d-block w-100 slider-img" src={img4} /></Link>
       
      </Carousel.Item>
    </Carousel>
    );
}

export default Products;