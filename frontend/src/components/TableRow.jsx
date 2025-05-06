import "../App.css";
import Edit from "./Edit";
import Delete from "./Delete";

function TableRow({ item, controls }) {
  return (
    <tr>
      {Object.keys(item).map((key, index) => (
        <td key={index}>{item[key]}</td>
      ))}
      {controls && <Edit />}
      {controls && <Delete />}
    </tr>
  );
}

export default TableRow;
