import "../App.css";

function TableRow({ columns }) {
  return (
    <tr>
      {columns.map((column, index) => (
        <td key={index}>{column}</td>
      ))}
    </tr>
  );
}

export default TableRow;
