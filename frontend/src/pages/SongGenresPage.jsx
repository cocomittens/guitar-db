import { useState, useEffect } from "react";
import Table from "../components/Table";
import { song_genres_columns } from "../mockData";

function SongGenres() {
  const [songGenres, setSongGenres] = useState([]);

  const loadSongGenres = async () => {
    const response = await fetch("http://localhost:30594/song_genres", {
      method: "GET",
    });
    const data = await response.json();
    setSongGenres(data);
  };

  useEffect(() => {
    loadSongGenres();
  }, []);

  return (
    <>
      <h2>Song Genres</h2>
      <p>View Genre(s) for each song.</p>
      <Table items={songGenres} columns={song_genres_columns} />
    </>
  );
}

export default SongGenres;
