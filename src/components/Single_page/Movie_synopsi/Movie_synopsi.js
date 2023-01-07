import React from 'react'
import './Movie_synopsi.css'
import EmptyFile from "../../../common/Empty/EmptyFile"
import { useParams } from "react-router-dom"
// import { useState } from 'react'
// import { useEffect } from 'react'
import axios from 'axios'
import { Component } from 'react'

export  class Movie_synopsi extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      items: ""
    }

  }

  fetchData = () => {
   
    axios(process.env.REACT_APP_API_URL+'/api/movieSingleList/'+this.props.params.slug ,
      {
       method:"post", data:this.props.params.slug, headers: { 'Content-Type': 'application/json' } 
      }
    )
    .then((response) => {
      
      var res = response.data;
      this.setState({items: res.aaData[0]});
      
      })
    .catch(function (error) {
      console.log(error);
    })
  }
  componentDidMount() {
    this.fetchData();
  }

 render() {
  return (
    <>
    {this.state.items ? (
          <div className='synopsi_rows'>
            <div className='synopsi_columns main_synopsi'>
              <img src={process.env.REACT_APP_API_URL+'/public/upload/'+this.state.items.images} alt='' style={{ width: "60%", heigth: "100%" }}/>
            </div>
            <div className='synopsi_columns'>
              <div className='synopsi_title'>{this.state.items.name}</div>
              <div className='synopsi_desc'>{this.state.items.synopsis}</div>
            </div>
          </div>
       
        ) : (
          <EmptyFile />
        )}
    </>
  )
}
}


export default (props) => {
  return <Movie_synopsi {...props} params={useParams()}/>
}