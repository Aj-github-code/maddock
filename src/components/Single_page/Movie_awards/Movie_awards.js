import React from 'react'
import './Movie_awards.css'
import EmptyFile from "../../../common/Empty/EmptyFile"
import PastMovieData from "../../Movies/PastMovieReleases/PastMovieData.json"
import { useParams } from "react-router-dom"
import { useState } from 'react'
import { useEffect } from 'react'


function Movie_awards() {
  
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
        <div>
            <div className='originals_awards'>
           
       <div className='awards_rows'>
         <div className='awards_columns'>
           <h4>Director - </h4>
           <h4>{items.direct_of_photo}</h4>
           <br/>
           <h4>Producer - </h4>
           <h4>{items.production_designer}</h4>
           <br/>
           <h4>Producer - </h4>
           <h4>{items.production_designer}</h4>
           <br/>
           <h4>Producer - </h4>
           <h4>{items.production_designer}</h4>
           <br/>
           <h4>Producer - </h4>
           <h4>{items.production_designer}</h4>
           <br/>
           <h4>Musical Director - </h4>
           <h4>{items.production_designer}</h4>
           <br/>
           <h4>Music Producer - </h4>
           <h4>{items.production_designer}</h4>
           <br/>
           <h4>Music Producer - </h4>
           <h4>{items.production_designer}</h4>
           
         </div>
         <div className='awards_columns'>
           <h4>Director - </h4>
           <h4>{items.direct_of_photo}</h4>
           <br/>
           <h4>Producer - </h4>
           <h4>{items.production_designer}</h4>
           <br/>
           <h4>Producer - </h4>
           <h4>{items.production_designer}</h4>
           <br/>
           <h4>Producer - </h4>
           <h4>{items.production_designer}</h4>
           <br/>
           <h4>Producer - </h4>
           <h4>{items.production_designer}</h4>
           <br/>
           <h4>Musical Director - </h4>
           <h4>{items.production_designer}</h4>
           <br/>
           <h4>Music Producer - </h4>
           <h4>{items.production_designer}</h4>
           <br/>
           <h4>Music Producer - </h4>
           <h4>{items.production_designer}</h4>
         </div>
       </div>


        </div>
     </div>
         ) : (
          <EmptyFile />
        )}

    </>
  )
}
export default Movie_awards