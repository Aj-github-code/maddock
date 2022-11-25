import React from 'react'
import './Originals_gallery.css'
import Originals_main from "../Original_main/Originals_main.json"
import Gallerycard from "./Gallerycard"


function Originals_gallery() {
  
  return (
    <>
        {Originals_main.map((value) => {
        return(
          <div className='originals_gallery'>
            <div className='originalgallery_grid'>
              {value.gallery.map((item) => {
                return <Gallerycard key={item.id} item={item} />
              })}
            </div>
            </div>
            )
        })}

    </>
  )
}
export default Originals_gallery
