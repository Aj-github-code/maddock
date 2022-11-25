import React, { useEffect, useState } from "react"
import "./News_All.css"
// import PastMovieData from "./PastMovieData.json"
// import Mcard from "./Mcard"
import NewsCard from "./NewsCard";
import NewsPopData from "./NewsPopData.json"
import axios from 'axios';

const AllNews = () => {

    const [items, setItems] = useState([])
    const [visible, setVisible] = useState(8)

    const showMoreNews = () => {
        setVisible((prevValue) => prevValue + 4);
    }
    
    useEffect(() => {
        // setItems(PastMovieData);
        // setVisible([...new Set(PastMovieData.map((item) => item.type))])

        axios.get('NewsPopData.json')
        .then((res) => res.json())
        .then((data) => setItems(data));
    },[])

    return (
    <>
      <section className='news allnewstop'>
        {/* <div className='container'> */}
          <div className='content gridNews'>
            {NewsPopData.slice(0, visible).map((item) => {
              return <NewsCard key={item.id} item={item} />
            })}
          </div>
        <button className='movie-btn' onClick={showMoreNews}>View More</button>

        {/* </div> */}
      </section>
    </>
  )
}

export default AllNews