import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateSongPage from "./pages/CreateSongPage";
import EditSongPage from "./pages/EditSongPage";
import Navigation from "./components/Navigation";
import StudentPage from "./pages/StudentPage";
import LabelPage from "./pages/LabelPage";

function App() {
  return (
    <div className="app">
      <header>
        <h1>Studio 83 Guitar Songs Database</h1>
        <img
          src="beaver_mascot.png"
          alt="a cute cartoon beaver playing guitar"
          class="responsive-image"
        ></img>
        <p>Full Stack MERN App and SQL Demonstration</p>
      </header>

      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/create-Song" element={<CreateSongPage />}></Route>
          <Route path="/edit-Song/:id" element={<EditSongPage />}></Route>
          <Route path="/labels" element={<LabelPage />}></Route>
          <Route path="/students" element={<StudentPage />}></Route>
        </Routes>
      </Router>

      <footer>
        <p>© 2025 Stackpole and Stoddard </p>
      </footer>
    </div>
  );
}

export default App;
