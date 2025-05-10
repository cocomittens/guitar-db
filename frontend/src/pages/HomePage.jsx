import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Table from "../components/Table";
import { song_data, song_columns } from "../mockData";

function HomePage({ setSongToEdit }) {
  const [songs, setSongs] = useState([]);
  //const navigate = useNavigate()

  /*Per MDN, default fetch() request is GET, adding redundant '{method: 'GET'}'
    for illustrative purposes*/
  const loadSongs = async () => {
    const response = await fetch("http://localhost:30594/songs", {
      method: "GET",
    });
    const data = await response.json();
    setSongs(data);
    console.log(data);
  };

  useEffect(() => {
    loadSongs();
  }, []);

  return (
    <>
      <h2>Available Songs</h2>
      <p>Browse Available Songs by Genre, Artist, Relase Year, etc</p>
      <p>Save Your Progress Using Your Student ID</p>
      <Link to="/create-Song">
        <button style={{ marginBottom: "1rem" }}>Create Song</button>
      </Link>
      <Table items={songs} columns={song_columns} controls={true} />
    </>
  );
}

export default HomePage;
