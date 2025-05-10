import { useState, useEffect } from "react";
import Table from "../components/Table";
import { student_data, student_columns } from "../mockData";

function StudentPage() {
  const [students, setStudents] = useState([]);

  const loadStudents = async () => {
    const response = await fetch("http://localhost:30594/students", {
      method: "GET",
    });
    const data = await response.json();
    setStudents(data);
  };

  useEffect(() => {
    loadStudents();
  }, []);

  return (
    <>
      <h2>Current Students</h2>
      <p>Browse Available Songs by Genre, Artist, Relase Year, etc</p>
      <p>Save Your Progress Using Your Student ID</p>
      <Table items={students} columns={student_columns} />
    </>
  );
}

export default StudentPage;
