import React from 'react';
import facebook from '../images/facebook.svg';
import instagram from '../images/instagram.svg';
import twitter from '../images/twitter.svg';
import linkedin from '../images/linkedin.svg';



const Footer = () => {

  return(
    <footer className="footer-icons">
      <hr></hr>
      <a href ="#"><img className="icon-i blue" src = {facebook}></img></a>
      <a href ="#"><img className="icon-i pink" src = {instagram}></img></a>
      <a href ="#"><img className="icon-i green" src = {twitter}></img></a>
      <a href ="#"><img className="icon-i purple" src = {linkedin}></img></a>
    </footer>
  );
}

export default Footer;
