import React from 'react'
import './Originals_gallery.css'
import Originals_main from "../Original_main/Originals_main.json"
import Gallerycard from "./Gallerycard"
import { Box } from '@mui/material'


function Originals_gallery() {
  
  return (
    <>
        {Originals_main.map((value) => {
        return(
          <Box style={{ maxWidth: "100%" }}>
            <div className='originals_gallery'>
              <div className='originalgallery_grid'>
                {value.gallery.map((item) => {
                  return <Gallerycard key={item.id} item={item} />
                })}
              </div>
              </div>
            </Box>
            )
        })}

    </>
  )
}
export default Originals_gallery
