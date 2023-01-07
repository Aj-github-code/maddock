import React from 'react'
import './Originals_synopsi.css'
import Originals_main from "../Original_main/Originals_main.json"
import { Box } from '@mui/material'


function Originals_synopsi() {
  
  return (
    <>
        {Originals_main.map((value) => {
        return(
          <Box>
          <div className='ori_synopsi_rows'>
            <div className='ori_synopsi_columns main_ori_synopsi'>
              <img src={value.Image} alt=''/>
            </div>
            <div className='ori_synopsi_column2'>
              <div className='ori_synopsi_title'>{value.Title}</div>
              <p className='ori_synopsi_desc'>{value.desc}</p>
            </div>
          </div>
          </Box>
        )
        
        })}

    </>
  )
}
export default Originals_synopsi
