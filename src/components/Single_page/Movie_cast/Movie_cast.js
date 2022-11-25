import React from 'react'
import './Movie_cast.css'
import Moviecard from "./Moviecard"
import EmptyFile from "../../../common/Empty/EmptyFile"
import PastMovieData from "../../Movies/PastMovieReleases/PastMovieData.json"
import { useParams } from "react-router-dom"
import { useState } from 'react'
import { useEffect } from 'react'


function Movie_cast() {
  
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
    {/* <h1>Hello</h1> */}
    {items ? (
       
          <div className='originals_cast'>
            <div className='main_cast'>
                <h1>CAST</h1>
            </div>
            <div className='cast_grid'>
              {items.cast.map((item) => {
                return <Moviecard key={item.id} item={item} />
              })}
            </div>
            
            <div className='main_cast' style={{ marginTop: '5%' }}>
                <h1>CREW</h1>
            </div>
            <img src='../../../../images/Line.png' alt='' style={{ width: "100%" }}/>

            <div className='cast_rows'>
              <div className='cast_columns'>
                <h4>Director of Photography - </h4>
                <h4>{items.direct_of_photo}</h4>
                <br/>
                <h4>Production Designer - </h4>
                <h4>{items.production_designer}</h4>

              </div>
              <div className='cast_columns'>
                <h4>Costume Designer - </h4>
                <h4>{items.direct_of_photo}</h4>
                <br/>
                <h4>Action Director - </h4>
                <h4>{items.production_designer}</h4>
                <br/>
                <h4>VFX - </h4>
                <h4>{items.VFX}</h4>
              </div>
            </div>


          </div>
         ) : (
          <EmptyFile />
        )}

    </>
  )
}
export default Movie_cast
