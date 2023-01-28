import React from 'react'
import './Originals_synopsi.css'
import Originals_main from "../Original_main/Originals_main.json"
import { Box } from '@mui/material'


function Originals_synopsi() {
  
  return (
    <>
        {Originals_main.map((value) => {
        return(
        
          <div className='row'>
            <div className='col-md-6' >
              <img src={value.Image} alt='' style={{width:'90%'}} />
            </div>
            <div className='col-md-6' >
              <div className='ori_synopsi_title'>{value.Title}</div>
              <p className='ori_synopsi_desc'>{value.desc}</p>
            </div>
          </div>
       
        )
        
        })}

    </>
  )
}
export default Originals_synopsi
