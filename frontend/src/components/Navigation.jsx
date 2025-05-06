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
      <Link to="">
        <button>Albums</button>
      </Link>
      <Link to="">
        <button>Artists</button>
      </Link>
      <Link to="">
        <button>Genres</button>
      </Link>
      <Link to="/labels">
        <button>Labels</button>
      </Link>
    </nav>
  );
}

export default Navigation;
