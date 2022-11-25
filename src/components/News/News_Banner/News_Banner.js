import React from 'react'
import "./News_Banner.css"
import News_banner from '../../../images/News_banner.png'

function News_Banner() {
  return (
    <>
      <section className='Movie-Banner'>
        <img src={News_banner} alt="Movie Banner" />
      </section>
    </>
  )
}

export default News_Banner