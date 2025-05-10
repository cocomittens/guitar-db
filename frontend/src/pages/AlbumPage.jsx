import { useState, useEffect } from "react";
import Table from "../components/Table";
import { album_data, album_columns } from "../mockData";

function AlbumPage() {
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
      <p>View current albums</p>

      <Table items={album_data} columns={album_columns} />
    </>
  );
}

export default AlbumPage;
