import React, {Component} from 'react';
import photo from '../images/p1.jpg';
import rowF from '../images/row.svg';



class Projects extends Component{

  render(){
    return(
      <div>
        <h3 className = "title p-c">Projects</h3>
      <div className = " box pink-bg">
        <div className = " table">
            <Project id="kk"/>
            <Project/>
            <Project/>
            <Project/>
            <Project/>

        </div>
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
      <h2 className = "p-title p-c">title of the project</h2>
      <small className="p-c">brief explication about the project brief explication about the project brief explication about the project </small>
      <div className="buttons">
        <button className = "button p-c" onClick = {this.sayHello} >Visit live website</button>
        <button className = "button p-c" onClick = {this.sayHello}> To the Project</button>
      </div>
    </section>
  );}
}

export default Projects;
