import { TiPencil} from "react-icons/ti";
import {Link} from 'react-router-dom'
	
function Edit({ SongId, onEdit }) {
    
    return (
        <Link to={`/edit-Song/${SongId}`} >
        <TiPencil/>
    </Link>
    );
  }

  export default Edit;