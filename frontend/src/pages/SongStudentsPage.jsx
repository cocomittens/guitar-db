import { useState, useEffect } from "react";
import Table from "../components/Table";
import { song_students_columns } from "../mockData";

function SongStudents({ setSongToEdit }) {
  const [songStudents, setSongStudents] = useState([]);

  const loadSongStudents = async () => {
    const response = await fetch("http://localhost:30594/student_songs", {
      method: "GET",
    });
    const data = await response.json();
    const updatedSongStudents = data.map(({ is_learned, ...song_student }) => ({
      ...song_student,
      learned: is_learned > 0 ? "Yes" : "No",
    }));
    setSongStudents(updatedSongStudents);
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
