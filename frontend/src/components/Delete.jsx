import React from "react";
import { TiTrash } from "react-icons/ti";

function Delete({ SongId, onDelete }) {
  return (
    <button
      type="button"
      className="icon-button delete"
      onClick={() => onDelete(SongId)}
    >
      <TiTrash />
    </button>
  );
}

export default Delete;
