import React from "react"
import "./Footer.css"
// import { Link } from "react-router-dom"
// import Modals from "../../components/Modal"
// import { useState } from "react"

const Footer = () => {

  // const [modal, setmodal] = useState(false)
  // const [name, setName ] = useState()

  // const setBoth = (term) => {
  //   setName(term);
  //   setmodal(true);
  // }
  return (
    <>
      <footer>
      <div className='legal'>
        <div className="icon mainfooter">
        <hr className="hrline"/>
          {/* <div className="row">
            <div className="col-sm-10" style={{ marginLeft: '-20%'}}> */}
            <div>  Copyright © 2022 Maddock - All Rights Reserved.</div>
            {/* </div>
            <div className="col-sm-2" style={{ marginLeft: '12%' }}> */}
              {/* <ul> */}
              <div className="socialicon">
                <a href="https://www.facebook.com/maddockfilms/"><i className='fab fa-facebook-f' style={{ backgroundColor: "transparent", color: 'white' }}></i></a>
                <a href="https://twitter.com/maddockfilms/"><i className='fab fa-twitter' style={{ backgroundColor: "transparent", color: 'white' }}></i></a>
                <a href="https://www.linkedin.com/company/maddock-films-private-limited/"><i className='fab fa-linkedin' style={{ backgroundColor: "transparent", color: 'white' }}></i></a>
                <a href="https://www.youtube.com/c/MaddockFilms/playlists?app=desktop"><i className='fab fa-youtube' style={{ backgroundColor: "transparent", color: 'white' }}></i></a>
                <a href="https://www.instagram.com/maddockfilms/?hl=en&__coig_restricted=1"><i className='fab fa-instagram' style={{ backgroundColor: "transparent", color: 'white' }}></i></a>
              </div>
              {/* </ul> */}
            {/* </div> */}
          {/* </div> */}
        </div>
      </div>
      {/* <Modals toggle={() => setmodal(!modal)} isOpen={modal} name={name}></Modals> */}
      </footer>
      
    </>
  )
}

export default Footer