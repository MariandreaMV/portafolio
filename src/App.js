import React, {Component} from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import axios from 'axios';

import Contact from "./components/Contact.js"
import Footer from './components/Footer.js';
import Navigation from './components/Navigation.js';
import Profile from './components/Profile.js';
import Projects from './components/Projects.js';
import Description from './components/Description.js';
import NotFound from './components/NotFound.js';
import About from './components/About.js';

class App extends Component{

  constructor(){
    super();
    this.state = {
        mydata: []
    };
  }

  componentDidMount(){
    axios.get('https://api.airtable.com/v0/appVCTWKCfjOZXrsW/portafolio?api_key=keymHH7kvWhAUxvgK')
      .then(data =>{
        this.setState({
          mydata: data.data.records
        })
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  render(){
    return (
      <BrowserRouter>
        <div className="container">
          <div className = "wrap">
            <Navigation />
            <Switch>
              <Route exact  path = '/' component = {Profile}/>
              <Route exact  path = '/projects' render = { () => <Projects projects = {this.state.mydata}/>}/>
              <Route  path = '/contact' component = {Contact}/>
              <Route path = '/about' component = {About}/>
              <Route  path = '/projects/:id' render ={ ({match,history}) => <Description projects = {this.state.mydata} history = {history} match = {match}/>}/>
              <Route component = {NotFound}/>
            </Switch>
          </div>
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
