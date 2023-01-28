import React, { useState, useEffect } from "react"
import EmptyFile from "../../../common/Empty/EmptyFile"
import PastMovieData from "../../Movies/PastMovieReleases/PastMovieData.json"
import { useParams } from "react-router-dom"
import Movie_tabs from '../Movie_tabs/Movie_tabs'
import Footer from "../../../common/Footer/Footer"
// import Footer from "../../../common/Footer/Footer"
// import Single_page_banner from "../Single_page_banner/Single_page_banner"
import "./Single_page.css"
import axios from 'axios';


function SinglePage() {
  const { slug } = useParams();
  const [slugs, setSlug] = useState();

    // const [item, setItem] = useState(null)
    
    // const [img, setImg] = useState()
    // useEffect(() => {
    //   let item = PastMovieData.find((item) => item.slug === parseInt(slug))
    //   if (item) {
    //     setItem(item)
    //     setImg(item.image)
    //   }
    // }, [slug])

    React.useEffect(()=>{
      window.scrollTo(0, 0);
    },[])
    
    const API_URL = process.env.REACT_APP_API_URL
  
    var config = {
      method: 'post',
      url: API_URL+'/api/movieSingleList/'+slug,
      headers: { 
        'Content-Type': 'application/json'
      },
  
      };

      console.log(config);
      const [items, setItems] = useState([])
      
      useEffect(() => {
   
      axios(config)
      .then(function (response) {
        console.log(response);
        var res = response.data;
        // console.log(response);
        setItems(res.aaData[0]);
        
        })
      .catch(function (error) {
        console.log(error);
      });
        
      },[])
  
      
    return (
      <>
          <div>
              <img src={API_URL+'/public/upload/'+items.images} alt='' style={{ width: "100%", maxHeight: "600px"}}/>
              <Movie_tabs/>
              <img src={items.footerimage} alt='' className="movie_footer"/>

              <Footer/>
          </div>
        
      </>
    )
  }
  
  export default SinglePage