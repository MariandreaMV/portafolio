import React from 'react';
import error from '../images/error.svg';

const NotFound = ()=> {

  return (
    <div className =" not-f gray-bg">
      <div className = "center">
        <img className="icon-i" src = {error} alt="error icon"></img>
        <h1> Not Found</h1>
      </div>
    </div>
  );
}


export default NotFound;
