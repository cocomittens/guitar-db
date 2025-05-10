const db = require("./db-connector");
const MY_ONID = "cs340_stoddaco";

const express = require("express");
const app = express();

// Middleware to allow cross-origin requests
const cors = require("cors");

// Set a port in the range: 1024 < PORT < 65535
const PORT = 30594;

// If on FLIP or classwork, use cors() middleware to allow cross-origin requests from the frontend with your port number:
// EX (local): http://localhost:5173
// EX (FLIP/classwork) http://classwork.engr.oregonstate.edu:5173
app.use(cors({ credentials: true, origin: "*" }));
app.use(express.json()); // this is needed for post requests, good thing to know

app.get("/songs", async (req, res) => {
  try {
    const query = "SELECT * FROM Songs;";
    const [rows] = await db.query(query);
    res.status(200).json(rows);
  } catch (error) {
    console.error("Error executing queries:", error);
    res.status(500).send("Could not retrieve songs from the database.");
  }
});

app.post("/songs", async (req, res) => {
  const { title, artist, album, key, bpm, capo, difficulty, genre, chords } =
    req.body;
  try {
    const query =
      "INSERT INTO Songs (title, artist, album, `key`, bpm, capo, difficulty, genre, chords) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);";
    const [result] = await db.query(query, [
      title,
      artist,
      album,
      key,
      bpm,
      capo,
      difficulty,
      genre,
      chords,
    ]);
    res.status(201).json({ id: result.insertId });
  } catch (error) {
    console.error("Error executing queries:", error);
    res.status(500).send("Could not add song to the database.");
  }
});

app.put("/songs/:id", async (req, res) => {
  const { id } = req.params;
  const { title, artist, album, key, bpm, capo, difficulty, genre, chords } =
    req.body;
  try {
    const query =
      "UPDATE Songs SET title = ?, artist = ?, album = ?, `key` = ?, bpm = ?, capo = ?, difficulty = ?, genre = ?, chords = ? WHERE song_id = ?;";
    await db.query(query, [
      title,
      artist,
      album,
      key,
      bpm,
      capo,
      difficulty,
      genre,
      chords,
      id,
    ]);
    res.status(200).send("Song updated successfully.");
  } catch (error) {
    console.error("Error executing queries:", error);
    res.status(500).send("Could not update song in the database.");
  }
});

// Tell express what port to listen on
app.listen(PORT, function () {
  console.log(
    "Express started on http://classwork.engr.oregonstate.edu:" +
      PORT +
      "; press Ctrl-C to terminate."
  );
});
