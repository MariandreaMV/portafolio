import React, {Component} from 'react';
import {ProjectsData} from '../data/projects.js';


const Projects = () =>{

  let projects = ProjectsData.map( (project) => {
    return <Project title={project.title} description={project.briefDescription} photos = {project.img_src} website={project.website} key = {project.id} />
  });

    return(
      <div>
        <h3 className = "title p-c">Projects</h3>
      <div className = " box ">
        <div className = " table">
          {projects}
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
        <a href = "/Projects/description" ><button className = "button p-c" onClick = {this.sayHello}>Description</button></a>
      </div>
    </section>
  );}
}

export default Projects;
