import TableRow from "./TableRow";
import "../App.css";
import Delete from "./Delete";
import Edit from "./Edit";

function Table({ items, columns }) {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((column, i) => (
            <th key={i}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {items.map((item, i) => (
          <TableRow key={i} item={item} />
        ))}
      </tbody>
    </table>
  );
}

export default Table;
