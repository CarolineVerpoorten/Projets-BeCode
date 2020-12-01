import React, {useState, Component} from "react";
import "./Home.css";
import flatDesign from "./data/flat-design.jpg";
// import L from 'leaflet';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
// import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import SignPage from './components/Auth';
// import LoginPage from '.components/login';
import MapPage from './components/Map';
import MainNav from './components/Navigation/MainNav';
import HomePage from './components/home';

class App extends Component {

  render(){
   
  return (
    <BrowserRouter>
    <Switch>
    <Redirect from="/" to="/signup" exact />
    <Route path="/home" component={HomePage}/>
    <Route path="/signup" component={SignPage}/>
    <Route path="/map" component={MapPage}/>
    </Switch>
    </BrowserRouter>
  );
}

}

export default App;

