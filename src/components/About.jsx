// import React from "react";
import { Image } from "../data/user.js"

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I Made This</p>
      <img src={Image} alt="I made this" />
    </div>
  );
}


export default About