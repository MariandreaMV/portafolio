import React from 'react';
import {NavLink} from 'react-router-dom';


const Navigation = () => {
  return(
    <nav>
      <ul className="nav">
        <li className="nav-item item1"><NavLink exact to="/">Mariandrea Maldonado</NavLink></li>
        <li className="nav-item item2"><NavLink to="/Projects">Projects</NavLink></li>
        <li className="nav-item item3"><NavLink to="/service">Service</NavLink></li>
        <li className="nav-item item4"><NavLink to="/tools">Tools</NavLink></li>
        <li className="nav-item item5"><NavLink to="/contact">Contact</NavLink></li>
      </ul>
      <hr/>
    </nav>
  );
}


export default Navigation;
