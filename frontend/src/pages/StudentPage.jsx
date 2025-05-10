import { useState, useEffect } from "react";
import Table from "../components/Table";
import { student_data, student_columns } from "../mockData";

function StudentPage() {
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
      <h2>Current Students</h2>
      <p>Browse Available Songs by Genre, Artist, Relase Year, etc</p>
      <p>Save Your Progress Using Your Student ID</p>
      <Table items={student_data} columns={student_columns} />
    </>
  );
}

export default StudentPage;
