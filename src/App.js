
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import Newscom from './components/Newscom';
import Slipper from './components/Slipper';
import { ReactDOM } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
    
  state={
    progress:0
  }
  setprogress=(progress)=>{
    this.setState({
      progress:progress
    })
  }
  render() {

    return (
      <div>
        <BrowserRouter>
        <Navbar />
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        
      />
          <div className="container my-3">

             <Routes>
            <Route exact path="/"  element={<Newscom  setprogress={this.setprogress} key="home"pagesize={3} country='in' category='general' />}></Route>
              <Route   exact path="/science"  element={<Newscom  setprogress={this.setprogress} key="science"pagesize={3} country='in' category='science' />}></Route>
              <Route   exact path="/business"  element={<Newscom  setprogress={this.setprogress} key="business"pagesize={3} country='in' category='business' />}></Route>
              
              
              <Route   exact path="/sports"  element={<Newscom  setprogress={this.setprogress} key="sports"pagesize={3} country='in' category='sports' />}></Route>
        
              <Route   exact path="/general"  element={<Newscom  setprogress={this.setprogress} key="general"pagesize={3} country='in' category='general' />}></Route>
              <Route   exact path="/technology"  element={<Newscom  setprogress={this.setprogress} key="technology"pagesize={3} country='in' category='technology' />}></Route>
              <Route   exact path="/entertainment"  element={<Newscom  setprogress={this.setprogress} key="entertainment"pagesize={3} country='in' category='entertainment' />}></Route>
              </Routes>   

          </div>
        </BrowserRouter>
       

        
      </div>
    )
  }
}


