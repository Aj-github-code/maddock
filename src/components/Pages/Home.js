import React from 'react'
import Footer from '../../common/Footer/Footer'
import { HomeAbout } from '../Home/HomeAbout/HomeAbout'
// import { HomeMovies } from '../Home/HomeMovies/HomeMovies'
import HomeMovie from '../Home/HomeMovies/HomeMovie'
import { HomeNews } from '../Home/HomeNews/HomeNews'
import HomeSlider from '../Home/HomeSlider/HomeSlider'

function Home() {
  return (
    <>
    
    <HomeSlider/>
      
      <HomeAbout/>
      {/* <HomeMovies/> */}
      <HomeMovie/>
      <HomeNews style={{width:"90%"}}/>
      <Footer/>

      
    </>
  )
}

export default Home