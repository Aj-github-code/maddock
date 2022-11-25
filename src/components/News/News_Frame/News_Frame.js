import React from 'react'
import "./News_Frame.css"
import { BsSearch } from "react-icons/bs";



function News_Frame() {
  return (
    <>
    <div className='News-title'>
      <input type="text"  placeholder='Search' style={{ backgroundColor: "white", color: 'grey' }} className="News_search" />
      <BsSearch className='SearchIcon'/>
    </div>
    
    </>
  )
}

export default News_Frame