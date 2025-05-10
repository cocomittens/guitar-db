import { useState, useEffect } from "react";
import Table from "../components/Table";
import { song_data, song_columns } from "../mockData";

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
      <h2>Student Songs</h2>
      <p>
        View Songs Assigned to students and whether they have been learned yet
      </p>
      <Table items={song_data} columns={song_columns} controls={true} />
    </>
  );
}

export default SongGenres;
