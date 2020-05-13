import React from 'react';
import facebook from '../images/facebook.svg';
import instagram from '../images/instagram.svg';
import linkedin from '../images/linkedin.svg';
import github from '../images/github.svg';



const Footer = () => {

  return(
    <footer className="footer-icons">
      <hr></hr>
      < a href="https://www.linkedin.com/in/mariandrea-maldonado-a85b781a8" target = "_blank"><img className="icon-i purple" src = {linkedin} alt="linked in icon"></img></a>
      < a href="https://github.com/MariandreaMV" target = "_blank"><img className="icon-i green" src = {github} alt="github icon"></img></a>
      < a href="https://www.facebook.com/mariandrea.maldonado.5" target = "_blank"><img className="icon-i blue" src = {facebook} alt ="facebook icon"></img></a>
      < a href="https://www.instagram.com/mariandreamv/?hl=es" target = "_blank"><img className="icon-i pink" src = {instagram} alt="intagram icon"></img></a>
    </footer>
  );
}

export default Footer;
