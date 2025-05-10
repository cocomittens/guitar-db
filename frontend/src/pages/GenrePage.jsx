import { useState, useEffect } from "react";
import Table from "../components/Table";
import { genre_data, genre_columns } from "../mockData";

function GenrePage({ setSongToEdit }) {
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
      <h2>Available Genres</h2>
      <p>View current genres</p>

      <Table items={genre_data} columns={genre_columns} />
    </>
  );
}

export default GenrePage;
