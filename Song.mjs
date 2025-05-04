import { uid } from 'uid';

export default class Song {
   
    constructor(title, _id, artist, album, key, bpm, capo, difficulty, year) {
        this.title =title;
        this._id = uid(24);
        this.artist = artist;
        this.album = album;
        this.key = key;
        this.bpm = bpm;
        this.capo = capo;
        this.difficulty = difficulty;
        this.year = year;
        
    }
}