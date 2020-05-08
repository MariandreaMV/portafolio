import React, {Component} from 'react';
import photo from '../images/p.jpg';
import rowF from '../images/row.svg';



class Projects extends Component{

  render(){
    return(
      <div className = " box pink-bg">
        <h2 className="title">Projects</h2>

        <div className = " table">
            <Project id="kk"/>
            <Project/>
            <Project/>
            <Project/>
            <Project/>
            <Project/>
        </div>

      </div>
    );
  }
}


class  Project extends Component {


  sayHello() {
    const ep = document.getElementById('kk');
    console.log(ep);
    ep.style.opacity = '0';
    alert('Hello!');
  }



render(){

  return(
    <section className = "col">
      <img className = "image-project" src ={photo}></img>
      <h2 className = "p-title">title of the project</h2>
      <small>brief explication about the project</small>
      <div className="buttons">
        <button className = "button" onClick = {this.sayHello} >Visit live website</button>
        <button className = "button" onClick = {this.sayHello}> To the Project</button>
      </div>
    </section>
  );}
}

export default Projects;
