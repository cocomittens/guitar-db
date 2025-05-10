import { useState, useEffect } from "react";
import Table from "../components/Table";
import { artist_data, artist_columns } from "../mockData";

function ArtistPage() {
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
      <h2>Available Artists</h2>
      <p>View current artists</p>

      <Table items={artist_data} columns={artist_columns} />
    </>
  );
}

export default ArtistPage;
