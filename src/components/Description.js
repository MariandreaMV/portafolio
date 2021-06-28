import React from "react";
import NotFound from "./NotFound.js";

const Description = (props) => {
  function Exist(id, cant) {
    if (id < cant) return true;
    else return false;
  }

  let id = props.match.params.id;
  let exist = Exist(id, props.projects.length);

  if (exist) {
    let projects = props.projects;
    let project;
    projects.map((sproject) => {
      if (sproject.fields.id === id) project = sproject.fields;
      return 0;
    });

    let gallery = project.gallery.map((photo, i) => (
      <img
        key={photo.id}
        className="image-d"
        src={photo.url}
        alt="project"
      ></img>
    ));
    return (
      <div className=" caja">
        <div className="row">
          <div className="column pink-bg">
            <h2 className="p-title center"> {project.title}</h2>
            <div className=" b-d">
              <button className="button" onClick={props.history.goBack}>
                go Back
              </button>

              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="button">website</button>
              </a>
            </div>
          </div>
          <div className="item6">
            <p>{project.description} </p>
            <p>{project.tools}</p>
          </div>
        </div>
        <div className="gallery">{gallery}</div>
      </div>
    );
  } else {
    return <NotFound />;
  }
};

export default Description;
