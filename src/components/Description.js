import React, {Component} from 'react';
import {Consumer} from '../data/projects.js';
import NotFound from './NotFound.js';

const Description = ({history,match}) => {

    return (
      <div className = " caja">
        <Consumer>
          {context => {

              function Exist(id,cant){
                if (id < cant)
                  return true;
                else
                  return false;
              }

              let id = match.params.id;
              let exist = Exist(id,context.length);
              if(exist){
                let project = context[id];
                let i=0;
                let gallery = project.img_src.map((photo) =>
                    <img key={i++} className = "image-d" src ={require(`../data/images/${photo}`)} alt = "project photo"></img>

                );
                return(
                  <div>
                    <div className = "row">
                      <div className = " column pink-bg">
                        <h2 className = "p-title center"> {project.title}</h2>
                        <div className = " b-d">
                          <a><button className = "button" onClick ={ history.goBack}>go Back</button></a>
                          <a href= {project.website} target ="_blank"><button className = "button">website</button></a>
                        </div>
                      </div>
                      <div className = "item6">
                        <p>{project.description} </p>
                        <p>{project.tools}</p>
                      </div>
                    </div>
                    <div className = " gallery">
                      {gallery}
                    </div>
                  </div>
                );
            }else{
              return(
                <NotFound/>
              );
            }
          }}
        </Consumer>
      </div>
    );
}


export default Description;
