export const song_data = [
  {
    song_id: 1,
    album_id: 7,
    genre_id: 3,
    artist_id: 6,
    title: "Hot August Rain",
    bpm: 90,
    difficulty: 0.5,
    capo: 0,
    chords: "A, E, D",
  },
  {
    song_id: 2,
    album_id: 6,
    genre_id: 2,
    artist_id: 3,
    title: "Corona Rumba",
    bpm: 130,
    difficulty: 0.2,
    capo: 3,
    chords: "D, C, G",
  },
  {
    song_id: 3,
    album_id: 5,
    genre_id: 1,
    artist_id: 1,
    title: "Metal Mouth",
    bpm: 130,
    difficulty: 0.7,
    capo: 3,
    chords: "Am, F, C, G",
  },
];

export const song_columns = [
  "song_id",
  "album_id",
  "genre_id",
  "artist_id",
  "title",
  "bpm",
  "difficulty",
  "capo",
  "chords",
];

export const student_data = [
  {
    student_id: 1,
    first_name: "Juno",
    last_name: "Wilder",
  },
  {
    student_id: 2,
    first_name: "Luna",
    last_name: "Wilder",
  },
  {
    student_id: 3,
    first_name: "Liam",
    last_name: "Smith",
  },
  {
    student_id: 4,
    first_name: "Olivia",
    last_name: "Johnson",
  },
];

export const student_columns = ["Student ID", "First Name", "Last Name"];

export const label_data = [
  { id: 1, name: "District Records" },
  { id: 2, name: "Power Records" },
  { id: 3, name: "Shasta" },
];

export const label_columns = ["Label ID", "Label Name"];

export const genre_data = [
  { _id: 1, name: "Rock" },
  { _id: 2, name: "Pop" },
  { _id: 3, name: "County" },
];

export const genre_columns = ["genre_id", "name"];

export const artist_data = [
  { _id: 1, name: "Mega Charged" },
  { _id: 2, name: "Better Than Mega Charged" },
  { _id: 3, name: "#Hashtag" },
  { _id: 4, name: "The 340 Mood" },
  { _id: 5, name: "Vegan Tequila" },
  { _id: 6, name: "During June" },
];

export const artist_columns = ["artist_id", "name"];

export const album_data = [
  {
    album_id: 1,
    label_id: 5,
    artist_id: 3,
    release_year: "2020",
    title: "Jager Bomb Blues",
  },
  {
    album_id: 2,
    label_id: 2,
    artist_id: 2,
    release_year: "1997",
    title: "Still Better Than Mega Charged",
  },
  {
    album_id: 3,
    label_id: 2,
    artist_id: 2,
    release_year: "1999",
    title: "Now Even Better Than Mega Charged",
  },
  {
    album_id: 4,
    label_id: 1,
    artist_id: 1,
    release_year: "1997",
    title: "Screaming into the Abyss",
  },
  {
    album_id: 5,
    label_id: 1,
    artist_id: 1,
    release_year: "2017",
    title: "20 Years of Screaming",
  },
  {
    album_id: 6,
    label_id: 3,
    artist_id: 3,
    release_year: "2021",
    title: "Now That's What I Call Covid!",
  },
  {
    album_id: 7,
    label_id: 6,
    artist_id: 3,
    release_year: "2024",
    title: "After July",
  },
  {
    album_id: 8,
    label_id: 6,
    artist_id: 3,
    release_year: "2022",
    title: "Cold Beer",
  },
];

export const album_columns = [
  "album_id",
  "artist_id",
  "label_id",
  "release_year",
  "title",
];

export const song_genres_data = [
  { song_id: 1, genre_id: 1 },
  { song_id: 2, genre_id: 2 },
  { song_id: 3, genre_id: 3 },
];

export const song_genres_columns = ["Song ID", "Genre ID"];
