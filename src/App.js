import "./App.css"
import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './common/Navbar/Navbar'
import Home from "./components/Pages/Home"
import AboutMain from "./components/About/AboutMain/AboutMain"
import Movies from "./components/Movies/MoviePage/Movies"
import News from "./components/News/News/News"
import Originals_main from "./components/Originals/Original_main/Original_main"
// import { Suspense } from "react"
import SinglePage from "./components/Single_page/Single_page/Single_page"

// const SinglePage = React.lazy(() => import('./components/Single_page/Single_page/Single_page'));

function App() {

  useEffect(() => {
     const root = document.documentElement;
    root?.style.setProperty(
      "--font-family", "Imago" 
    );
    root?.style.setProperty("--font-family", "Imago");
  }, []);
  return (
    <>
    <Router>
      
      <Navbar/>

      <Switch>
        <Route path='/' component={Home} exact></Route>
        <Route path='/about' component={AboutMain}></Route>
        <Route path='/movies' component={Movies}></Route>
        {/* <Suspense fallback={<div>Loading...</div>}> */}
          <Route path='/movie/:slug' component={SinglePage} ></Route>
        {/* </Suspense> */}
        <Route path='/originals' component={Originals_main}></Route>
        <Route path='/news' component={News}></Route>
        {/*<Route path='/singlepage/:id/:slug' component={SinglePage} ></Route>
        <Route path='/media' component={Media}></Route>
        <Route path='/contact' component={Contact}></Route> */}


        

      </Switch>
    </Router>
    </>
  )
}

export default App