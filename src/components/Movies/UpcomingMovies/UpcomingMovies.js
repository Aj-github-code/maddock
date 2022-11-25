import React from "react"
import Cards from "./Cards"
import "./UpcomingMovies.css"

const UpcomingMovies = () => {
  return (
    <>
      {/* <section className='popular top'> */}
          <div className='heading'>
            <h1>UPCOMING MOVIES</h1>
          </div>

          <div className='content'>
            <Cards />
          </div>
        
      {/* </section> */}
    </>
  )
}

export default UpcomingMovies