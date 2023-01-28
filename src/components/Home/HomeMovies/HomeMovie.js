import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import "./HomeMovies.css"

import { Link } from 'react-router-dom';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

function HomeMovie() {
  return (
    <>
    <div className='movie-title'>MOVIES</div>

      <div style={{position:'relative'}}>

        <ImageList
          sx={{ width: "100%", height: "100%" }}
          variant="quilted"
          cols={4}
          rowHeight={150}
        >
          {itemData.map((item) => (
            <ImageListItem  key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
              <img
              className="movie_imgs"
                {...srcset(item.img, 151, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
              />
               <div className='movie_detail'>
                <span className="movie_detail_title" style={{color:'white', width:"90%", fontWeight:400, marginLeft:50}}> {item.title}</span>
                <br />
                <span className="movie_detail_date" style={{color:'white', width:"90%", marginLeft:50}}> {item.date}</span>
              </div>
            </ImageListItem>
          ))}
        </ImageList>
        <div className="floating-movie-btn">
          <Link to={'/movies'}><button className='movie-btn' style={{ marginBottom: '6%'}}>View More</button></Link>
        </div>
      </div>
    </>
  );
}
export default HomeMovie
const itemData = [
  {
    img: '../../../images/hm_1.png',
    title: 'Dasvi',
    date: "7 April 2022",
    rows: 3,
    cols: 2,
  },
  {
    img: '../../../images/hm_2.png',
    title: 'Hum Do Hamare Do',
    date: "29 October 2021",
    rows: 3,
    cols: 1,
  },
  {
    img: '../../../images/hm_3.png',
    title: 'Shiddat',
    date: "8 November 2019",
    rows: 3,
    cols: 1,
  },
  {
    img: '../../../images/hm_4.png',
    title: 'Roohi',
    date: "11 March 2021",
    rows: 3,
    cols: 2,
  },
  {
    img: '../../../images/hm_5.png',
    title: 'Angrezi Medium',
    date: "13 March 2020",
    rows: 3,
    cols: 2,
  },
  {
    img: '../../../images/hm_6.png',
    title: 'Love Aaj Kal 2',
    date: "14 February 2020",
    author: '@arwinneil',
    rows: 3,
    cols: 1,
  },
  {
    img: '../../../images/hm_7.png',
    title: 'Bala',
    date: "8 November 2019",
    rows: 3,
    cols: 2,

  },
  {
    img: '../../../images/hm_1.png',
    title: 'Mimi',
    date: "26 July 2021",
    rows: 3,
    cols: 1,

  },
  
];