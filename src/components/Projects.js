import React, {Component} from 'react';

const Projects = (props) =>{

    let data = props.projects;

    return(

      <div>
      <h3 className = "title p-c">Projects</h3>
      <div className = " box ">
      <div className = " table">
        {
           data.map( (project) =>
            <Project
              title={project.fields.title}
              description={project.fields.briefDescription}
              photos = {project.fields.img_src}
              website={project.fields.website}
              id = {project.fields.id}
              key = {project.fields.id}
            />)
          }
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
