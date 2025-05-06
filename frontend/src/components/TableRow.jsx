import "../App.css";
import Edit from "./Edit";
import Delete from "./Delete";

function TableRow({ item }) {
  return (
    <tr>
      {Object.keys(item).map((key, index) => (
        <td key={index}>{item[key]}</td>
      ))}
      <Edit />
      <Delete />
    </tr>
  );
}

export default TableRow;
