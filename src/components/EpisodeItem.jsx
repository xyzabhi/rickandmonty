import React from "react";
import "./episodeitem.css";
function EpisodeItem(props) {
  return (
    <div className="list-group-item episodeitem">
      <h3>{props.name}</h3>
      <p>{props.epicode}</p>
      <p>{props.date}</p>
    </div>
  );
}

export default EpisodeItem;
