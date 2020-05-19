import React, {Component} from 'react';

const PortafolioContext = React.createContext();


export class Provider extends Component{


   ProjectsData = [
    {
      title: "Othello",
      description: "as a Project for DataStructure asignature. it has 2 players mode and 1 player against the computer, 3 levels of heuristic",
      briefDescription: "Desktop version",
      tools: "used of Unity as android enviroment and was writed in c++",
      website: "https://github.com/MariandreaMV/Othello",
      img_src: ["othello/0.png","othello/1.png","othello/2.png","othello/3.png",],
      id: "0"
    },
    {
      title: "Othello",
      description: "as a Project for Programation II asignature. it has 2 players mode and 1 player against the computer, 3 levels of heuristic",
      briefDescription: "Android version",
      tools: "used of Unity as android enviroment and was writed in c#",
      website: "https://github.com/MariandreaMV/Othello-Unity",
      img_src: ["othelloAndroid/0.png","othelloAndroid/1.png","othelloAndroid/2.png","othelloAndroid/3.png"],
      id: "1"
    },
    {
      title: "La Santa",
      description:"web app of the restaurant LA SANTA with a reservations system and login for two levels of administration",
      briefDescription: "web app of the restaurant LA SANTA",
      tools: "php, html, css, bootstrap, mysql",
      website: "http://mariandreamv.online",
      img_src: ["lasanta/1.png","lasanta/2.png","lasanta/3.png","lasanta/4.png"],
      id: "2"
    },
    {
      title: "My Portafolio",
      description:"web site of my Portafolio, is the current page your looking",
      briefDescription: "web site of my Portafolio",
      tools: "html, javascript, css, react, react-bootstrap, Desing of wireframe using sigma,",
      website: "https://github.com/MariandreaMV/portafolio",
      img_src: ["portafolio/0.png","portafolio/1.png","portafolio/2.png","portafolio/3.png"],
      id: "3"
    },
  ]


  render(){
    return (
      <PortafolioContext.Provider value = {this.ProjectsData}>
         {this.props.children}
      </PortafolioContext.Provider>
    );
  }
}


export const Consumer = PortafolioContext.Consumer;
