import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SongTable from "../components/SongTable";
import { Link } from "react-router-dom";
import Table from "../components/Table";
import { album_data, album_columns } from "../mockData";

function AlbumPage({ setSongToEdit }) {
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
      <h2>Available Albums</h2>
      <p>Browse Available Songs by Genre, Artist, Relase Year, etc</p>
      <p>Save Your Progress Using Your Student ID</p>

      <Table items={album_data} columns={album_columns} />
    </>
  );
}

export default AlbumPage;
