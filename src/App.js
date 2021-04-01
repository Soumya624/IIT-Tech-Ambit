import logo from './logo.svg';
import React, { Component } from "react";
import './App.css';
import HeaderComponent from './headerComponent';
import CardComponent from './cardComponent';
import CarouselComponent from './carouselComponent';
import FooterComponent from './footerComponent';
import ProjectComponent from './projectComponent';
import Project2Component from './project2Component';
import Project3Component from './project3Component';
import Project4Component from './project4Component';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
      <HeaderComponent/>
      <br/><br/>
      <center>
        <h2>Welcome Here!</h2>
      </center>
      <Route path="/Page 1">
        <ProjectComponent/>
      </Route>
      <Route path="/Page 2">
        <Project2Component/>
      </Route>
      <Route path="/Page 3">
        <Project3Component/>
      </Route>
      <Route path="/Page 4">
        <Project4Component/>
      </Route>
      </Router>
      
      
    </div>
  );
}

export default App;
