import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SongTable from "../components/SongTable";
import { Link } from "react-router-dom";
import { song_data } from "../mockData";

function HomePage({ setSongToEdit }) {
  const [labels, setLabels] = useState([]);

  return (
    <>
      <h2>View Labels</h2>
      <p>Browse Available Songs by Genre, Artist, Relase Year, etc</p>
      <p>Save Your Progress Using Your Student ID</p>
      <Link to="/create-Song">
        <button>Create Song</button>
      </Link>
      <SongTable songs={song_data}></SongTable>
    </>
  );
}

export default HomePage;
