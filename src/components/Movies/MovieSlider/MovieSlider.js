import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../../../images/MovieSlider.png";
import img2 from "../../../images/MovieSlider.png";
import img3 from "../../../images/MovieSlider.png";
import img4 from "../../../images/MovieSlider.png";

const Products = () => {
    return(
    <Carousel>
      <Carousel.Item interval={1000}>
        <img  className="d-block w-100"  src={img1}  />
        
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img className="d-block w-100" src={img2} />
        
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img3} />
       
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img4} />
       
      </Carousel.Item>
    </Carousel>
    );
}

export default Products;