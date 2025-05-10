import { useState, useEffect } from "react";
import Table from "../components/Table";
import { artist_data, artist_columns } from "../mockData";

function ArtistPage() {
  const [artists, setArtists] = useState([]);

  const loadArtists = async () => {
    const response = await fetch("http://localhost:30594/artists", {
      method: "GET",
    });
    const data = await response.json();
    setArtists(data);
  };

  useEffect(() => {
    loadArtists();
  }, []);

  return (
    <>
      <h2>Available Artists</h2>
      <p>View current artists</p>

      <Table items={artists} columns={artist_columns} />
    </>
  );
}

export default ArtistPage;
