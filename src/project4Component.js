import logo from './logo.svg';
import React, { Component } from "react";
import './App.css';
import HeaderComponent from './headerComponent';
import CardComponent from './card2Component';
import CarouselComponent from './carouselComponent';
import FooterComponent from './footerComponent';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function example() {
  return (
    <div className="App">
      <div style={{padding:"3%"}}>
          <h2 style={{textAlign:"left"}}>Active Projects</h2>
          <p style={{textAlign:"left"}}>Want to <a href="">add a new project?</a></p>
      </div>
        <CardComponent/>
        <br/>
        <CardComponent/>
        <br/>
        <CardComponent/>
        <div style={{padding:"3%"}}>
          <h2 style={{textAlign:"left"}}>Drafts</h2>
      </div>
      <CardComponent/>
      <div style={{padding:"3%"}}>
          <h2 style={{textAlign:"left"}}>Completed Projects</h2>
      </div>
      <CardComponent/>
      <br/>
        <FooterComponent/>
    </div>
  );
}

export default example;