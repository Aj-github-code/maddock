import React from 'react'
import Footer from '../../common/Footer/Footer'

export default function ContactUs() {
    const API_URL = process.env.REACT_APP_API_URL
  return (
      <>
      <div style={{height: '100%'}}>

        <img  src={API_URL+'/public/upload/maddock-map.png'} style={{width:'100%', height: 'auto'}} />
        <img  src={API_URL+'/public/upload/maddock-contact-us.png'} style={{width:'100%', height: 'auto'}} />
        
      </div>
    </>
  )
}
