import React from 'react'
import './Originals_main.css'
import Footer from '../../../common/Footer/Footer'
import HeadTitle from '../../../common/HeadTitle/HeadTitle'
import Originals_Banner from '../Originals_Banner/Originals_Banner'
import Originals_tabs  from '../Originals_tabs/Originals_tabs'

function Originals_main() {
    return (
      <>
        <div className='originals'>
  
          <HeadTitle/>
          <Originals_Banner/>
          <Originals_tabs/>
          <Footer/>
        </div>
      </>
    )
  }
  export default Originals_main