import React, { useEffect, useState } from "react"
import "./PastMovieReleases.css"
// import PastMovieData from "./PastMovieData.json"
import Mcard from "./Mcard"
import axios from 'axios';

const AllMovies = () => {
  const API_URL = process.env.REACT_APP_API_URL

  var config = {
    method: 'get',
    url: API_URL+'/api/movie_list',
    headers: { 
      'Content-Type': 'application/json'
    },

    };
    const [items, setItems] = useState([])
    const [visible, setVisible] = useState(8)

    const showMoreMovies = () => {
        setVisible((prevValue) => prevValue + 4);
    }
    
    useEffect(() => {
 
    axios(config)
		.then(function (response) {
      
		  var res = response.data;
		  console.log(response);
      setItems(res.aaData);
		  // if(res !== ''){
			//   var token = res.data.token;
			//   console.log(token)
			//   alert('Login Successfull')
		  // } else {
			//   if(res.status === "success") {
			//   } else {
      //     alert(res.message);
			//   }
			// }
		  })
    .catch(function (error) {
      console.log(error);
    });
      
        // setItems(PastMovieData);
        // setVisible([...new Set(PastMovieData.map((item) => item.type))])

        // axios.get('PastMovieData.json')
        // .then((res) => res.json())
        // .then((data) => setItems(data));


    },[])

    return (
    <>
      <section className='blog allmediatop'>
        {/* <div className='container'> */}
          <div className='content gridMedia'>
            {items.slice(0, visible).map((item) => {
              return <Mcard key={item.id} item={item} />
            })}
          </div>
        <button className='movie-btn' onClick={showMoreMovies}>View More</button>

        {/* </div> */}
      </section>
    </>
  )
}

export default AllMovies