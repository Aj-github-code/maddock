import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import "./HomeMovies.css"

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

    <ImageList
      sx={{ width: "100%", height: "100%" }}
      variant="quilted"
      cols={4}
      rowHeight={150}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 151, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
    </>
  );
}
export default HomeMovie
const itemData = [
  {
    img: '../../../images/hm_1.png',
    title: 'Breakfast',
    
    rows: 3,
    cols: 2,
  },
  {
    img: '../../../images/hm_2.png',
    title: 'Burger',
    rows: 3,
    cols: 1,
  },
  {
    img: '../../../images/hm_3.png',
    title: 'Camera',
    rows: 3,
    cols: 1,
  },
  {
    img: '../../../images/hm_4.png',
    title: 'Coffee',
    rows: 3,
    cols: 2,
  },
  {
    img: '../../../images/hm_5.png',
    title: 'Hats',
    rows: 3,
    cols: 2,
  },
  {
    img: '../../../images/hm_6.png',
    title: 'Honey',
    author: '@arwinneil',
    rows: 3,
    cols: 1,
  },
  {
    img: '../../../images/hm_7.png',
    title: 'Basketball',
    rows: 3,
    cols: 2,

  },
  {
    img: '../../../images/hm_8.png',
    title: 'Fern',
    rows: 3,
    cols: 1,

  },
  
];