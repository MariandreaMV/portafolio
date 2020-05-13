import React, {Component} from 'react';


class Contact extends Component{
  render(){
    return(

      <div className = "profile cont">
        <form>
          <div className ="center">
          <h2 className = "p-title">I'll contact you.</h2>
          </div>
          <div  className = "two">
              <div className = "input">
                <label>Name*</label>
                <input tupe="text"></input>
              </div>
              <div className = "input">
                <label>Last Name*</label>
                <input type = "text" ></input>
              </div>
          </div>
          <div  className = "two">
              <div className = "input">
                <label>Phone*</label>
                <input tupe="number"></input>
              </div>
              <div className = "input">
                <label>Company</label>
                <input type = "text" ></input>
              </div>
          </div>
          <div className = "input">
            <label>E-mail*</label>
            <input type="e-mail"></input>
          </div>
          <div className = "input">
            <label>What is your project about?</label>
            <textarea rows="4"></textarea>
          </div>
          <div className = "center">
            <button className = "button ">Send</button>
          </div>
        </form>
      </div>

    );
  }
}

export default Contact;
