import React from 'react'
import './Movie_gallery.css'
import EmptyFile from "../../../common/Empty/EmptyFile"
import PastMovieData from "../../Movies/PastMovieReleases/PastMovieData.json"
import { useParams } from "react-router-dom"
import { useState } from 'react'
import { useEffect } from 'react'
import Gallerycard from "./Gallerycard"
import axios from 'axios'
import { Box } from '@mui/material'


function Movie_gallery() {
  // const { id } = useParams()
  //   const [items, setItem] = useState(null)
    
  //   const [img, setImg] = useState()
  //   useEffect(() => {
  //     let items = PastMovieData.find((items) => items.id === parseInt(id))
  //     if (items) {
  //       setItem(items)
  //       setImg(items.image)
  //     }
  //   }, [id])
    
  const { slug } = useParams()
  const API_URL = process.env.REACT_APP_API_URL

  var config = {
    method: 'post',
    url: API_URL+'/api/movieGalleryList/'+slug,
    data: {
      length: 1
    },
    headers: { 
      'Content-Type': 'application/json'
    },

    };
    const [items, setItems] = useState([])
    
    useEffect(() => {
 
    axios(config)
    .then(function (response) {
      
      var res = response.data;
      console.log(response);
      setItems(res.aaData);
      
      })
    .catch(function (error) {
      console.log(error);
    });
      
    },[])

  return (
    <>
       {items ? (
        <Box style={{ maxWidth: "100%" }}>
          <div className='movie_gallery'>
            <div className='gallery_grid'>
              {items.map((item) => {
                return <Gallerycard key={item.id} item={item} />
              })}
            </div>
            </div>
          </Box>
          ) : (
            <EmptyFile />
          )}


    </>
  )
}
export default Movie_gallery
