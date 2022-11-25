import React, { useState, useEffect } from "react"
import EmptyFile from "../../../common/Empty/EmptyFile"
import PastMovieData from "../../Movies/PastMovieReleases/PastMovieData.json"
import { useParams } from "react-router-dom"
import Movie_tabs from '../Movie_tabs/Movie_tabs'
import Footer from "../../../common/Footer/Footer"
// import Footer from "../../../common/Footer/Footer"
// import Single_page_banner from "../Single_page_banner/Single_page_banner"
import "./Single_page.css"


const SinglePage = () => {
    const { id } = useParams()
    const [item, setItem] = useState(null)
    
    const [img, setImg] = useState()
    useEffect(() => {
      let item = PastMovieData.find((item) => item.id === parseInt(id))
      if (item) {
        setItem(item)
        setImg(item.image)
      }
    }, [id])
    
    //   const hoverHandler = (image, i) => {
    //       setImg(image);
  
    //   };
  
      
    return (
      <>
        {item ? (
            <div>
                <img src={item.banner} alt='' style={{ width: "100%"}}/>
                <Movie_tabs/>
                <img src={item.footerimage} alt='' className="movie_footer"/>

                <Footer/>
            </div>

        ) : (
          <EmptyFile />
        )}
        
      </>
    )
  }
  
  export default SinglePage