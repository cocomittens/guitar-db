import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="app-nav">
      <Link to="/">
        <button>Songs</button>
      </Link>
      <Link to="/students">
        <button>Students</button>
      </Link>
      <Link to="/song-students">
        <button>Student Songs</button>
      </Link>
      <Link to="/albums">
        <button>Albums</button>
      </Link>
      <Link to="/artists">
        <button>Artists</button>
      </Link>
      <Link to="/genres">
        <button>Genres</button>
      </Link>
      <Link to="/labels">
        <button>Labels</button>
      </Link>
    </nav>
  );
}

export default Navigation;
