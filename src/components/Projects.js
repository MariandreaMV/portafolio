import React, {Component} from 'react';
import {Consumer} from '../data/projects.js';


const Projects = () =>{
    return(
      <div>
      <h3 className = "title p-c">Projects</h3>
      <div className = " box ">
      <div className = " table">
      <Consumer>
        { context => (
           context.map( (project) =>
            <Project
              title={project.title}
              description={project.briefDescription}
              photos = {project.img_src}
              website={project.website}
              id = {project.id}
              key = {project.id}
            />))
          }
      </Consumer>
      </div>
    </div>
    </div>
    );
}


class  Project extends Component {
render(){
  return(
    <section className = "col">
      <img className = "image-project" src ={ require(`../data/images/${this.props.photos[0]}`)} alt ="project photo"></img>
      <h2 className = "p-title p-c">{this.props.title}</h2>
      <small className="p-c">{this.props.description}</small>
      <div className="two">
        <a href ={this.props.website} target="_blank"><button className = "button p-c">Website</button></a>
        <a href = {`/Projects/${this.props.id}`}><button className = "button p-c" onClick = {this.sayHello}>Description</button></a>
      </div>
    </section>
  );}
}

export default Projects;
