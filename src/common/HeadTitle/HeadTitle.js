import React from "react"
import "./HeadTitle.css"
import { useLocation, Link } from "react-router-dom"

const HeadTitle = () => {
  const location = useLocation()

  return (
    <>
      <div className='image-heading'>
          {/*<h1>{location.pathname.slice(1, -2, -1)}</h1>*/}
          <h1>{location.pathname.split("/")[1]}</h1>
          {/*<h1>{location.pathname.replace(/ /, "")}</h1>*/}

          
      </div>
    </>
  )
}

export default HeadTitle