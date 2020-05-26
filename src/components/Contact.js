import React, {Component} from 'react';


class Contact extends Component{
  render(){
    return(

      <div className = "profile cont">
        <form name="contact" method ="POST" data-netlify="true">
          <div className ="center">
          <h2 className = "p-title">I'll contact you.</h2>
          </div>
          <div  className = "two">
              <div className = "input">
                <label>Name*</label>
                <input tupe="text" name="name" required></input>
              </div>
              <div className = "input">
                <label>Last Name*</label>
                <input type = "text" name="last_name" required></input>
              </div>
          </div>
          <div  className = "two">
              <div className = "input">
                <label>Phone*</label>
                <input tupe="number" name="phone" required></input>
              </div>
              <div className = "input">
                <label>Company</label>
                <input type = "text" name="company" ></input>
              </div>
          </div>
          <div className = "input">
            <label>E-mail*</label>
            <input type="email" name="email" required></input>
          </div>
          <div className = "input">
            <label>What is your project about?</label>
            <textarea rows="4" name="about"></textarea>
          </div>
          <div className = "center">
            <button className = "button p-c" type="submit">Send</button>
          </div>
        </form>
      </div>

    );
  }
}

export default Contact;
