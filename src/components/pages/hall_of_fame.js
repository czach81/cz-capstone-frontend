import React from "react";
import hoflogo from "../pics/hoflogo.jpg";
import hof2 from "../pics/hof2.jpg";

export default function() {
  return (
    <div className="hofcomponent-wrapper">
      <h2>Stats</h2>
      <img src={hoflogo} alt="hoflogo" />;
      
      <div className="hof-players-wrapper"> 
      <img src={hof2} alt="hof2" />;
      </div>
     
    </div>
  );
}