import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';

import Contact from "./components/Contact.js"
import Footer from './components/Footer.js';
import Navigation from './components/Navigation.js';
import Profile from './components/Profile.js';
import Projects from './components/Projects.js';
import Description from './components/Description.js';
import NotFound from './components/NotFound.js';


function App() {
  return (

    <BrowserRouter>
      <div className="container">
        <div className = "wrap">
          <Navigation />
          <Switch>
            <Route exact  path = '/' component = {Profile}/>
            <Route exact  path = '/projects' component = {Projects}/>
            <Route  path = '/contact' component = {Contact}/>
            <Route  path = '/projects/description' render = { () => <Description/>} />
            <Route component = {NotFound}/>
          </Switch>
        </div>
        <Footer/>
      </div>
    </BrowserRouter>


  );
}

export default App;
