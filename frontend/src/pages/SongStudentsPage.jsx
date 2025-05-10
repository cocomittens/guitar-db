import { useState, useEffect } from "react";
import Table from "../components/Table";
import { song_students_data, song_students_columns } from "../mockData";

function SongStudents({ setSongToEdit }) {
  const [songStudents, setSongStudents] = useState([]);

  const loadSongStudents = async () => {
    const response = await fetch("http://localhost:30594/student_songs", {
      method: "GET",
    });
    const data = await response.json();
    setSongStudents(data);
  };

  useEffect(() => {
    loadSongStudents();
  }, []);

  return (
    <>
      <h2>Student Songs</h2>
      <p>
        View Songs Assigned to students and whether they have been learned yet
      </p>
      <Table items={songStudents} columns={song_students_columns} />
    </>
  );
}

export default SongStudents;
