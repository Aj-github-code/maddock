import React from 'react'
import './Movie_synopsi.css'
import EmptyFile from "../../../common/Empty/EmptyFile"
import PastMovieData from "../../Movies/PastMovieReleases/PastMovieData.json"
import { useParams } from "react-router-dom"
import { useState } from 'react'
import { useEffect } from 'react'

function Movie_synopsi() {
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

  return (
    <>
    {item ? (
          <div className='synopsi_rows'>
            <div className='synopsi_columns main_synopsi'>
              <img src={item.Image} alt=''/>
            </div>
            <div className='synopsi_columns'>
              <div className='synopsi_title'>{item.Title}</div>
              <p className='synopsi_desc'>{item.desc}</p>
            </div>
          </div>
       
        ) : (
          <EmptyFile />
        )}
    </>
  )
}
export default Movie_synopsi
