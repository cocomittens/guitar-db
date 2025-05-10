import "../App.css";
import Edit from "./Edit";
import Delete from "./Delete";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function TableRow({ item, controls }) {
  return (
    <tr>
      {Object.keys(item).map((key, index) => (
        <td key={index}>
          {typeof item[key] === "boolean"
            ? capitalizeFirstLetter(item[key].toString())
            : item[key]}
        </td>
      ))}
      {controls && (
        <td id="actions">
          <Edit SongId={item.song_id} song={item} />
          <Delete SongId={item.song_id} />
        </td>
      )}
    </tr>
  );
}

export default TableRow;
