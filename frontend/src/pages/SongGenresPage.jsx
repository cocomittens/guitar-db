import { useState, useEffect } from "react";
import Table from "../components/Table";
import { song_genres_data, song_genres_columns } from "../mockData";

function SongGenres() {
  const [songs, setSongs] = useState([]);
  //const navigate = useNavigate()

  /*Per MDN, default fetch() request is GET, adding redundant '{method: 'GET'}'
    for illustrative purposes*/
  const loadSongs = async () => {
    const response = await fetch("/Songs", { method: "GET" });
    const data = await response.json();
    setSongs(data);
  };

  useEffect(() => {
    loadSongs();
  }, []);

  return (
    <>
      <h2>Song Genres</h2>
      <p>View Genre(s) for each song.</p>
      <Table items={song_genres_data} columns={song_genres_columns} />
    </>
  );
}

export default SongGenres;
