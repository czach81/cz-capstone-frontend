import React from "react";
import stats from "../pics/stats.jpg";

export default function() {
  return (
    <div className="statscomponent-wrapper">
      <h2>Stats</h2>
      <img src={stats} alt="stats" />;
     
    </div>
  );
}