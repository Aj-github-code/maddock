import React from 'react'
import './Movie_awards.css'
import EmptyAwards from "../../../common/Empty/EmptyAwards"
import PastMovieData from "../../Movies/PastMovieReleases/PastMovieData.json"
import { useParams } from "react-router-dom"
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { Box } from '@mui/system'


function Movie_awards() {
  
  // const { id } = useParams()
  //   const [items, setItem] = useState(null)
    
  //   const [img, setImg] = useState()
  //   useEffect(() => {
  //     let items = PastMovieData.find((items) => items.id === parseInt(id))
  //     if (items) {
  //       setItem(items)
  //       setImg(items.image)
  //     }
  //   }, [id])

  const { slug } = useParams()
  const API_URL = process.env.REACT_APP_API_URL

  var config = {
    method: 'post',
    url: API_URL+'/api/movieAwardsList/'+slug,
    data: {
      length: 1
    },
    headers: { 
      'Content-Type': 'application/json'
    },

    };
    const [items, setItems] = useState([])
    
    useEffect(() => {
 
    axios(config)
    .then(function (response) {
      
      var res = response.data;
      console.log(response);
      setItems(res.aaData[0]);
      
      })
    .catch(function (error) {
      console.log(error);
    });
      
    },[])

  return (
    <>
    {items ? (
      // <Box style={{ maxWidth: "100%" }}>
      //   <div>
            <div className='originals_awards'>
           
       <div className='row' style={{ maxWidth: "100%" }}>
         <div className='col-md-6 awards_columns'>
         <h5>Award - {items.award_name}</h5>
           {/* <h5>{items.award_name}</h5> */}
           <br/>
           <h5>Category - {items.category}</h5>
           {/* <h5>{items.category}</h5> */}
           <br/>
           <h5>Name - {items.crew_name}</h5>
           {/* <h5>{items.crew_name}</h5> */}
           <br/><br/>
           <h5>Award - {items.award_name}</h5>
           {/* <h5>{items.award_name}</h5> */}
           <br/>
           <h5>Category - {items.category}</h5>
           {/* <h5>{items.category}</h5> */}
           <br/>
           <h5>Name - {items.crew_name}</h5>
           {/* <h5>{items.crew_name}</h5> */}
          
         </div>
         <div className='col-md-6 awards_columns'>
         <h5>Award - {items.award_name}</h5>
           {/* <h5>{items.award_name}</h5> */}
           <br/>
           <h5>Category - {items.category}</h5>
           {/* <h5>{items.category}</h5> */}
           <br/>
           <h5>Name - {items.crew_name}</h5>
           {/* <h5>{items.crew_name}</h5> */}
         </div>
       </div>


        </div>
     // </div>
    // </Box> 
         ) : (
          <EmptyAwards />
        )}

    </>
  )
}
export default Movie_awards