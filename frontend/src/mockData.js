export const song_data = [
  {
    song_id: 1,
    album: "After July",
    genre: "Country",
    artist: "During June",
    title: "Hot August Rain",
    bpm: 90,
    difficulty: 0.5,
    capo: 0,
    chords: "A, E, D",
    musical_key: "C",
  },
  {
    song_id: 2,
    album: "Now That's What I Call Covid!",
    genre: "Pop",
    artist: "#Hashtag",
    title: "Corona Rumba",
    bpm: 130,
    difficulty: 0.2,
    capo: 3,
    chords: "D, C, G",
    musical_key: "E",
  },
  {
    song_id: 3,
    album: "20 Years of Screaming",
    genre: "Rock, Metal",
    artist: "Mega Charged",
    title: "Metal Mouth",
    bpm: 130,
    difficulty: 0.7,
    capo: 3,
    chords: "Am, F, C, G",
    musical_key: "G",
  },
];

export const song_columns = [
  "Song ID",
  "Album ID",
  "Title",
  "BPM",
  "Difficulty",
  "Capo",
  "Key",
  "Chords",
];

export const student_data = [
  {
    student_id: 1,
    first_name: "Juno",
    last_name: "Wilder",
  },
  {
    student_id: 2,
    first_name: "Imari",
    last_name: "Brooks",
  },
  {
    student_id: 3,
    first_name: "Juniper",
    last_name: "Samuel",
  },
  {
    student_id: 4,
    first_name: "Zev",
    last_name: "Frasier",
  },
  {
    student_id: 5,
    first_name: "Conrad",
    last_name: "Blythe",
  },
];

export const student_columns = ["Student ID", "First Name", "Last Name"];

export const label_data = [
  { id: 1, name: "District Records" },
  { id: 2, name: "Power Records" },
  { id: 3, name: "Shasta" },
];

export const label_columns = ["Label ID", "Name"];

export const genre_data = [
  { _id: 1, name: "Rock" },
  { _id: 2, name: "Pop" },
  { _id: 3, name: "Country" },
  { _id: 4, name: "Metal" },
  { _id: 5, name: "Jazz" },
  { _id: 6, name: "Blues" },
  { _id: 7, name: "Folk" },
  { _id: 8, name: "Hip Hop" },
  { _id: 9, name: "R&B" },
  { _id: 10, name: "Reggae" },
];

export const genre_columns = ["Genre ID", "Name"];

export const artist_data = [
  { _id: 1, name: "Mega Charged" },
  { _id: 2, name: "Better Than Mega Charged" },
  { _id: 3, name: "#Hashtag" },
  { _id: 4, name: "The 340 Mood" },
  { _id: 5, name: "Vegan Tequila" },
  { _id: 6, name: "During June" },
];

export const artist_columns = ["Artist ID", "Name"];

export const album_data = [
  {
    album_id: 1,
    artist: "#Hashtag",
    label: "Vegan Tequila",
    release_year: "2020",
    title: "Jager Bomb Blues",
  },
  {
    album_id: 2,
    artist: "Better Than Mega Charged",
    label: "Power Records",
    release_year: "1997",
    title: "Still Better Than Mega Charged",
  },
  {
    album_id: 3,
    artist: "Better Than Mega Charged",
    label: "Power Records",
    release_year: "1999",
    title: "Now Even Better Than Mega Charged",
  },
  {
    album_id: 4,
    artist: "Mega Charged",
    label: "District Records",
    release_year: "1997",
    title: "Screaming into the Abyss",
  },
  {
    album_id: 5,
    artist: "Mega Charged",
    label: "District Records",
    release_year: "2017",
    title: "20 Years of Screaming",
  },
  {
    album_id: 6,
    artist: "#Hashtag",
    label: "Shasta",
    release_year: "2021",
    title: "Now That's What I Call Covid!",
  },
  {
    album_id: 7,
    artist: "#Hashtag",
    label: "During June",
    release_year: "2024",
    title: "After July",
  },
  {
    album_id: 8,
    artist: "#Hashtag",
    label: "During June",
    release_year: "2022",
    title: "Cold Beer",
  },
];

export const album_columns = [
  "Album ID",
  "Artist",
  "Label",
  "Release Year",
  "Title",
];

export const song_students_data = [
  {
    song_id: 1,
    student_id: 1,
    song_title: "Hot August Rain",
    student_name: "Juno Wilder",
    is_learned: false,
  },
  {
    song_id: 2,
    student_id: 1,
    song_title: "Corona Rumba",
    student_name: "Juno Wilder",
    is_learned: false,
  },
  {
    song_id: 3,
    student_id: 1,
    song_title: "Metal Mouth",
    student_name: "Juno Wilder",
    is_learned: false,
  },
  {
    song_id: 1,
    student_id: 2,
    song_title: "Hot August Rain",
    student_name: "Imari Brooks",
    is_learned: true,
  },
  {
    song_id: 2,
    student_id: 2,
    song_title: "Corona Rumba",
    student_name: "Imari Brooks",
    is_learned: true,
  },
];

export const song_students_columns = [
  "Song ID",
  "Student ID",
  "Song Title",
  "Student Name",
  "Learned",
];

export const song_genres_data = [
  {
    song_id: 1,
    genre_id: 3,
  },
  {
    song_id: 2,
    genre_id: 2,
  },
  {
    song_id: 3,
    genre_id: 1,
  },
];
export const song_genres_columns = ["Song ID", "Genre ID"];
