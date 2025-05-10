import React from 'react';
import {TiTrash } from "react-icons/ti";
	

function Delete({ SongId, onDelete }) {
  
  
  return (
    <div>
      <TiTrash  onClick={() => onDelete(SongId)} />

    </div>
  );
}


	
export default Delete;
