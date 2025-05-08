import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { genre_data } from "../mockData";

export const EditSongPage = () => {
  const { id } = useParams();
  const [title, settitle] = useState("");
  const [artist, setartist] = useState("");
  const [album, setalbum] = useState("");
  const [key, setkey] = useState("C");
  const [bpm, setbpm] = useState("");
  const [capo, setcapo] = useState(0);
  const [difficulty, setdifficulty] = useState(0);
  const [genre, setgenre] = useState([]);
  const [chords, setchords] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    // fetch existing song data
    fetch(`/Songs/${id}`)
      .then(res => res.json())
      .then(data => {
        settitle(data.title);
        setartist(data.artist);
        setalbum(data.album);
        setkey(data.key);
        setbpm(data.bpm);
        setcapo(data.capo);
        setdifficulty(data.difficulty);
        setgenre(data.genre || []);
        setchords(data.chords || "");
      });
  }, [id]);

  const editSong = async () => {
    const updated = { title, artist, album, key, bpm, capo, difficulty, genre, chords };
    const res = await fetch(`/Songs/${id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(updated),
    });
    if (res.status === 200) alert("Successfully updated song");
    else alert(`Failed to edit, status ${res.status}`);
    navigate("/");
  };

  return (
    <div>
      <h2>Edit Song Details</h2>
      <p>Release year in YYYY; chords comma-separated.</p>
      <table>
        <thead>
          <tr>
            <th>Title</th><th>Artist</th><th>Album</th><th>Key</th>
            <th>BPM</th><th>Capo</th><th>Difficulty</th><th>Genre</th><th>Chords</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type="text" value={title} onChange={e => settitle(e.target.value)} /></td>
            <td><input type="text" value={artist} onChange={e => setartist(e.target.value)} /></td>
            <td><input type="text" value={album} onChange={e => setalbum(e.target.value)} /></td>
            <td>
              <select value={key} onChange={e => setkey(e.target.value)}>
                <option value="C">C</option>
                <option value="C#">C#</option>
                <option value="D">D</option>
                <option value="D#">D#</option>
                <option value="E">E</option>
                <option value="F">F</option>
                <option value="F#">F#</option>
                <option value="G">G</option>
                <option value="G#">G#</option>
                <option value="A">A</option>
                <option value="A#">A#</option>
                <option value="B">B</option>
              </select>
            </td>
            <td><input type="number" value={bpm} onChange={e => setbpm(e.target.valueAsNumber)} /></td>
            <td><input type="number" value={capo} onChange={e => setcapo(e.target.valueAsNumber)} /></td>
            <td><input type="number" value={difficulty} onChange={e => setdifficulty(e.target.valueAsNumber)} /></td>
            <td>
              <select value={genre} onChange={e => setgenre(Array.from(e.target.selectedOptions, o => o.value))}>
                {genre_data.map(g => <option key={g.genre_id} value={g.name}>{g.name}</option>)}
              </select>
            </td>
            <td><input type="text" value={chords} onChange={e => setchords(e.target.value)} placeholder="e.g. Am, C, G" /></td>
            <td className="no-border-row"><button onClick={editSong}>Save</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default EditSongPage;
