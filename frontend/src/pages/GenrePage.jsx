import { useState, useEffect } from "react";
import Table from "../components/Table";
import { genre_columns } from "../mockData";

function GenrePage() {
  const [genres, setGenres] = useState([]);

  const loadGenres = async () => {
    const response = await fetch("http://localhost:30594/genres", {
      method: "GET",
    });
    const data = await response.json();
    setGenres(data);
  };

  useEffect(() => {
    loadGenres();
  }, []);

  return (
    <>
      <h2>Available Genres</h2>
      <p>View current genres</p>

      <Table items={genres} columns={genre_columns} />
    </>
  );
}

export default GenrePage;
