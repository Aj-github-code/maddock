import React from 'react'
import './Movie_gallery.css'
import EmptyFile from "../../../common/Empty/EmptyFile"
import PastMovieData from "../../Movies/PastMovieReleases/PastMovieData.json"
import { useParams } from "react-router-dom"
import { useState } from 'react'
import { useEffect } from 'react'
import Gallerycard from "./Gallerycard"


function Movie_gallery() {
  const { id } = useParams()
    const [items, setItem] = useState(null)
    
    const [img, setImg] = useState()
    useEffect(() => {
      let items = PastMovieData.find((items) => items.id === parseInt(id))
      if (items) {
        setItem(items)
        setImg(items.image)
      }
    }, [id])
    
  return (
    <>
       {items ? (
          <div className='movie_gallery'>
            <div className='gallery_grid'>
              {items.gallery.map((item) => {
                return <Gallerycard key={item.id} item={item} />
              })}
            </div>
            </div>
            ) : (
              <EmptyFile />
            )}

    </>
  )
}
export default Movie_gallery
