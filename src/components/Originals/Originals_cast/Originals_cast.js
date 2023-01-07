import React from 'react'
import './Originals_cast.css'
import Originals_main from "../Original_main/Originals_main.json"
import Castcard from "./Castcard"


function Originals_cast() {
  
  return (
    <>
        {Originals_main.map((value) => {
        return(
          <div className='originals_ori_cast'>
            <div className='main_ori_cast'>
                <h1>CAST</h1>
            </div>
            <div className='ori_cast_grid'>
              {value.cast.map((item) => {
                return <Castcard key={item.id} item={item} />
              })}
            </div>
            
            <div className='main_ori_cast' style={{ marginTop: '5%' }}>
                <h1>CREW</h1>
            </div>
            <img src='../../../../images/Line.png' alt='' className='img_line' />

            <div className='ori_cast_rows'>
              <div className='ori_cast_columns'>
                <h4>Director of Photography - </h4>
                <h4>{value.direct_of_photo}</h4>
                <br/>
                <h4>Production Designer - </h4>
                <h4>{value.production_designer}</h4>

              </div>
              <div className='ori_cast_columns'>
                <h4>Costume Designer - </h4>
                <h4>{value.direct_of_photo}</h4>
                <br/>
                <h4>Action Director - </h4>
                <h4>{value.production_designer}</h4>
                <br/>
                <h4>VFX - </h4>
                <h4>{value.VFX}</h4>
              </div>
            </div>


          </div>
        )
        
        })}

    </>
  )
}
export default Originals_cast
