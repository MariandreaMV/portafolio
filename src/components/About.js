import React from "react";
import design from "../images/design.png";
import code from "../images/code.png";

const About = () => {
  return (
    <div class="caja row">
      <div className="column center ">
        <div className="two">
          <img src={design} className="icon-i" alt="design_icon" />
          <h3 className="p-c">Design</h3>
        </div>
        <p>
          I value simple content structure, clean design patterns, and
          thoughtful interactions.
        </p>
        <h3 className="p-c">Desing tools</h3>
        <ul>
          <li>Figma</li>
          <li>Pen & Paper</li>
          <li>Sketch</li>
          <li>Balsamiq</li>
        </ul>
      </div>
      <div className="column center">
        <div className="two">
          <img src={code} className="icon-i" alt="code_icon" />
          <h3 className="p-c">Develop</h3>
        </div>
        <p>HTML, CSS, javaScript,Redux, Java, c, c#, c++, php</p>
        <h3 className="p-c">Dev tools</h3>
        <ul>
          <li>Atom</li>
          <li>Bootstrap</li>
          <li>React</li>
          <li>Github</li>
          <li>Netbeans</li>
          <li>Dev-C++</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
