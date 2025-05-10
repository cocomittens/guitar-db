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

// Songs table
app.get("/songs", async (req, res) => {
  try {
    const query = `
      SELECT 
        Songs.*, 
        Albums.title AS album_name 
      FROM Songs
      LEFT JOIN Albums ON Songs.album_id = Albums.album_id;
    `;
    const [rows] = await db.query(query);
    res.status(200).json(rows);
  } catch (error) {
    console.error("Error executing queries:", error);
    res.status(500).send("Could not retrieve songs from the database.");
  }
});

app.get("/songs/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const query = `SELECT * FROM Songs WHERE song_id = ${id};`;
    const [rows] = await db.query(query, [id]);
    if (rows.length > 0) {
      res.status(200).json(rows[0]);
    } else {
      res.status(404).send("Song not found.");
    }
  } catch (error) {
    console.error("Error executing queries:", error);
    res.status(500).send("Could not retrieve song from the database.");
  }
});

app.post("/songs", async (req, res) => {
  const { title, album, key, bpm, capo, difficulty, genre, chords } = req.body;
  try {
    const query = `INSERT INTO Songs (title, album, musical_key, bpm, capo, difficulty, genre, chords) VALUES (${title}, ${album}, ${key}, ${bpm}, ${capo}, ${difficulty}, ${genre}, ${chords});`;
    const [result] = await db.query(query, [
      title,
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
  const { title, musical_key, bpm, capo, difficulty, chords } = req.body;
  console.log(musical_key);
  try {
    const query = `
    UPDATE Songs
    SET title = ?, 
        musical_key = ?, 
        bpm = ?, 
        capo = ?, 
        difficulty = ?, 
        chords = ?
    WHERE song_id = ?;
  `;

    const values = [title, "C", bpm, capo, difficulty, chords, id];
    const [result] = await db.query(query, values);
    res.status(200).send("Song updated successfully.");
  } catch (error) {
    console.error("Error executing queries:", error);
    res.status(500).send("Could not update song in the database.");
  }
});

app.delete("/songs/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const query = `DELETE FROM Songs WHERE song_id = ?;`;
    const [result] = await db.query(query, [id]);
    if (result.affectedRows > 0) {
      res.status(200).send("Song deleted successfully.");
    } else {
      res.status(404).send("Song not found.");
    }
  } catch (error) {
    console.error("Error executing queries:", error);
    res.status(500).send("Could not delete song from the database.");
  }
});

// Students table
app.get("/students", async (req, res) => {
  try {
    const query = "SELECT * FROM Students;";
    const [rows] = await db.query(query);
    res.status(200).json(rows);
  } catch (error) {
    console.error("Error executing queries:", error);
    res.status(500).send("Could not retrieve students from the database.");
  }
});

// Song Students table
app.get("/student_songs", async (req, res) => {
  try {
    const query = `
      SELECT 
        Song_Students.song_id,
        Song_Students.student_id, 
        Songs.title AS song_title,
        CONCAT(Students.first_name, ' ', Students.last_name) AS student_name,
        Song_Students.is_learned
      FROM Song_Students
      LEFT JOIN Students ON Song_Students.student_id = Students.student_id
      LEFT JOIN Songs ON Song_Students.song_id = Songs.song_id;
    `;
    const [rows] = await db.query(query);
    res.status(200).json(rows);
  } catch (error) {
    console.error("Error executing queries:", error);
    res.status(500).send("Could not retrieve student songs from the database.");
  }
});

// Song Genres table
app.get("/song_genres", async (req, res) => {
  try {
    const query = "SELECT * FROM Song_Genres;";
    const [rows] = await db.query(query);
    res.status(200).json(rows);
  } catch (error) {
    console.error("Error executing queries:", error);
    res.status(500).send("Could not retrieve song genres from the database.");
  }
});

// Albums table
app.get("/albums", async (req, res) => {
  try {
    const query = "SELECT * FROM Albums;";
    const [rows] = await db.query(query);
    res.status(200).json(rows);
  } catch (error) {
    console.error("Error executing queries:", error);
    res.status(500).send("Could not retrieve albums from the database.");
  }
});

// Artists table
app.get("/artists", async (req, res) => {
  try {
    const query = "SELECT * FROM Artists;";
    const [rows] = await db.query(query);
    res.status(200).json(rows);
  } catch (error) {
    console.error("Error executing queries:", error);
    res.status(500).send("Could not retrieve artists from the database.");
  }
});

// Genres table
app.get("/genres", async (req, res) => {
  try {
    const query = "SELECT * FROM Genres;";
    const [rows] = await db.query(query);
    res.status(200).json(rows);
  } catch (error) {
    console.error("Error executing queries:", error);
    res.status(500).send("Could not retrieve genres from the database.");
  }
});

// Labels table
app.get("/labels", async (req, res) => {
  try {
    const query = "SELECT * FROM Labels;";
    const [rows] = await db.query(query);
    res.status(200).json(rows);
  } catch (error) {
    console.error("Error executing queries:", error);
    res.status(500).send("Could not retrieve labels from the database.");
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
