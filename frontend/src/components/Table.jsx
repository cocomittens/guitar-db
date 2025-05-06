import SongRow from "./SongRow";
import "../App.css";

function Table({ items, columns }) {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {items.map((song) => (
          <SongRow song={song} key={song._id} />
        ))}
      </tbody>
    </table>
  );
}

export default Table;
