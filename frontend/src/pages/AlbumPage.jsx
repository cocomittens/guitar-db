import { useState, useEffect } from "react";
import Table from "../components/Table";
import { album_columns } from "../mockData";

function AlbumPage() {
  const [albums, setAlbums] = useState([]);

  const loadAlbums = async () => {
    const response = await fetch("http://localhost:30594/albums", {
      method: "GET",
    });
    const data = await response.json();
    setAlbums(data);
  };

  useEffect(() => {
    loadAlbums();
  }, []);

  return (
    <>
      <h2>Available Albums</h2>
      <p>View current albums</p>

      <Table items={albums} columns={album_columns} />
    </>
  );
}

export default AlbumPage;
