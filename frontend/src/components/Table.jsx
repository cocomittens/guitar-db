import TableRow from "./TableRow";
import "../App.css";
import Delete from "./Delete";
import Edit from "./Edit";

function Table({ items, columns, controls }) {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((column, i) => (
            <th key={i}>{column}</th>
          ))}
          {controls && <th>Actions</th>}
        </tr>
      </thead>
      <tbody>
        {items.map((item, i) => (
          <TableRow key={i} item={item} controls={controls} />
        ))}
      </tbody>
    </table>
  );
}

export default Table;
