import { TiPencil } from "react-icons/ti";
import { Link } from "react-router-dom";

function Edit({ SongId, onEdit, song }) {
  return (
    <Link
      to={{ pathname: `/edit-Song/${SongId}` }}
      state={{ song }}
      className="icon-button edit"
    >
      <TiPencil />
    </Link>
  );
}

export default Edit;
