import React from 'react'
import Footer from '../../../common/Footer/Footer'
import HeadTitle from '../../../common/HeadTitle/HeadTitle'
import AllNews from '../News_All/AllNews'
import News_Banner from '../News_Banner/News_Banner'
import News_Frame from '../News_Frame/News_Frame'
// import Footer from '../../common/Footer/Footer'
// import AllNews from './AllNews'
// import News_Banner from './News_Banner'
// import News_Frame from './News_Frame'

function News() {
  return (

    <>
    <HeadTitle />
    <News_Banner />
    <News_Frame />
    <AllNews />
    <Footer /> 
    
    </>
  )
}

export default News