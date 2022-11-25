import React from 'react'
import './Originals_synopsi.css'
import Originals_main from "../Original_main/Originals_main.json"


function Originals_synopsi() {
  
  return (
    <>
        {Originals_main.map((value) => {
        return(
          <div className='ori_synopsi_rows'>
            <div className='ori_synopsi_columns main_ori_synopsi'>
              <img src={value.Image} alt=''/>
            </div>
            <div className='ori_synopsi_columns'>
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
