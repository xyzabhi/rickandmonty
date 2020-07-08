import React, { useState, useEffect } from "react";
import axios from "axios";
import "./episodelist.css";
import EpisodeItem from "./EpisodeItem";
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";
function EpisodeList() {
  const [episodes, setEpisodes] = useState([]);
  const [page, setPage] = useState(1);
  const [currSearch, setSearch] = useState("");
  const [currLink, setLink] = useState("page=1");

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/episode/?${currLink}`)
      .then((res) => {
        setEpisodes(res.data.results);
      })
      .catch((err) => console.log(err));
  }, [page, currSearch, currLink]);

  return (
    <div>
      <SearchBar funcSearch={setSearch} funcLink={setLink} />
      <div className="episodelist">
        {episodes.map((episode) => (
          <EpisodeItem
            key={episode.id}
            name={episode.name}
            date={episode.air_date}
            epicode={episode.episode}
          />
        ))}
      </div>
      <Pagination info={page} func={setPage} funcLink={setLink} />
      <h1>{currSearch}</h1>
    </div>
  );
}

export default EpisodeList;
