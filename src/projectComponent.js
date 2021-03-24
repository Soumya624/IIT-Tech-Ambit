import logo from './logo.svg';
import React, { Component } from "react";
import './App.css';
import HeaderComponent from './headerComponent';
import CardComponent from './cardComponent';
import CarouselComponent from './carouselComponent';
import FooterComponent from './footerComponent';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function example() {
  return (
    <div className="App">
      <div style={{padding:"3%"}}>
          <h2 style={{textAlign:"left"}}>Hi Siddhant!</h2>
          <p style={{textAlign:"left"}}>These are the projects that are open to you.</p>
      </div>
        <CardComponent/>
        <br/>
        <CardComponent/>
        <br/>
        <CardComponent/>
        <br/>
        <CarouselComponent/>
        <br/>
        <FooterComponent/>
    </div>
  );
}

export default example;