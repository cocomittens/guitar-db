import { useState, useEffect } from "react";
import Table from "../components/Table";
import { label_columns } from "../mockData";

function LabelPage({ setSongToEdit }) {
  const [labels, setLabels] = useState([]);

  const loadLabels = async () => {
    const response = await fetch("http://localhost:30594/labels", {
      method: "GET",
    });
    const data = await response.json();
    setLabels(data);
  };

  useEffect(() => {
    loadLabels();
  }, []);

  return (
    <>
      <h2>Available Labels</h2>
      <p>View current labels</p>

      <Table items={labels} columns={label_columns} />
    </>
  );
}

export default LabelPage;
