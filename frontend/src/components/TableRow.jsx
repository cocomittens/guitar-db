import "../App.css";

function TableRow({ item }) {
  return (
    <tr>
      {Object.keys(item).map((key, index) => (
        <td key={index}>{item[key]}</td>
      ))}
    </tr>
  );
}

export default TableRow;
