import React, {Component} from 'react';
import photo1 from '../images/p1.jpg';
import photo2 from '../images/p1.jpg';
import photo3 from '../images/p1.jpg';
import photo4 from '../images/p1.jpg';



class Description extends Component {
  render (){
    return (
      <div className = " caja green-bg">
        <div className = "row ">
          <div className = "column pink-bg">
            <h2 className = "p-title">Title of the project</h2>
            <div className = "two">
              <button className = "button">go Back</button>
              <button className = "button">go to the live site</button>
            </div>
          </div>
          <div className = "column">
            <p> description of the project and the tools used for it idcsjiejdsc dijcidcusdiejec dicjioasdcjosi iudjsciedsciue dicnsdicuj ediujedsi deiujsedie dcndioefc b in ijiu hiu hhiuouhjiuo  </p>
          </div>
        </div>
        <div className = "row gallery">
          <img className = "image-d" src ={photo1} alt = "project photo"></img>
          <img className = "image-d" src ={photo2} alt = "project photo"></img>
          <img className = "image-d" src ={photo3} alt = "project photo"></img>
          <img className = "image-d" src ={photo4} alt = "project photo"></img>
          <img className = "image-d" src ={photo4} alt = "project photo"></img>
          <img className = "image-d" src ={photo4} alt = "project photo"></img>
        </div>


      </div>

    );
  }
}


export default Description;
