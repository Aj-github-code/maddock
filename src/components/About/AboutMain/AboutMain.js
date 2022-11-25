import React from 'react'
import Footer from '../../../common/Footer/Footer'
import { AboutUs } from '../AboutUs/AboutUs'
import "./AboutMain.css"

function AboutMain() {
  return (
    <>
        <img src='../../../images/about_banner.png' alt='' className='about-banner'/>

        <AboutUs/>
        <Footer/>
    </>
  )
}
export default AboutMain