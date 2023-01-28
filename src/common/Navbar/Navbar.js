import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {

    const [isMobile, setIsMobile] = useState(false)
    const [fix, setFix] = useState(false)

    function setFixed() {
      if(window.scrollY >=2) {
        setFix(true)
      }else{
        setFix(false)
      }
    }

    window.addEventListener("scroll", setFixed)

  return (
    <>
      <nav className={fix ? "navbar fixed" : "navbar"}>
      <div className='logo'>
            <img src='../../images/logo2.png' alt='' />
          </div>
        <ul className={isMobile ? "nav-links-mobile" : "nav-links a"} 
        onClick={() => setIsMobile(false)}>
                
            <Link to='/' className='home'>
                <li>Home</li>
            </Link>
                    
            <Link to='/about' className="about">
                <li>About Us</li>
            </Link>
            <Link to='/movies' className="movie">
               <li>Movies</li>
            </Link>
            <Link to='/originals' className="original">
             <li>Originals</li>
            </Link>
            <Link to='/news' className="news">
               <li>News</li>
            </Link>
            <Link to='/contact' className="contact">
              <li>Contact Us</li>
            </Link>
                   
           
        </ul>
        <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
            {isMobile ? (
                <i className="fas fa-times"></i>
            ) : (
                <i className="fas fa-bars"></i>
            )}

        </button>
      </nav>
    </>
  );
}

export default Navbar;