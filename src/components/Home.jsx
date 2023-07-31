import React from "react";
import { Username, City } from '../data/user.js'

function Home() {
  return (
    <div id="home">
      <h1>
        {Username} is a Web Developer from {City}
      </h1>
    </div>
  );
}
 export default Home