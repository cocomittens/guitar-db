import mongoose from 'mongoose';
import 'dotenv/config';
//import Songs from './data/Songs.mjs';
//import Song from './Song.mjs';


const Song_DB_NAME = 'Song';
const Song_COLLECTION = 'Songs';
const SONG_CLASS = "Song";

let connection = undefined;
let SongModel = undefined;


//connect to MongoDB
async function connect(){
    try{
        await mongoose.connect(process.env.MONGODB_CONNECT_STRING);
        connection = mongoose.connection;
        console.log("Successfully connected to MongoDB using Mongoose!");
        SongModel= createModel();
    } catch(err){
        console.log(err);
        throw Error(`Could not connect to MongoDB ${err.message}`)
    }
}

//create using POST/orders 
function createModel(){
//define schema
    const songSchema = mongoose.Schema({
        title: {
            type: String,
            required: [true, 'Title is required'],
            trim: true
          },
          artist: {
            type: String,
            required: [true, 'Artist is required'],
            trim: true
          },
          album: {
            type: String,
            trim: true,
            default: 'Single' // Default if no album specified
          },
          key: {
            type: String,
            enum: ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'], // Valid keys
            uppercase: true
          },
          bpm: {
            type: Number,
            min: [20, 'BPM too low'],
            max: [300, 'BPM too high']
          },
          capo: {
            type: Number,
            min: [0, 'Capo must be >= 0'],
            max: [7, 'Capo must be <= 7']
          },
          difficulty: {
            type: Number,
            min: [1, 'Difficulty 1-5'],
            max: [5, 'Difficulty 1-5']
          },
          year: {
            type: Number,
            validate: {
              validator: (year) => year >= 1900 && year <= new Date().getFullYear(),
              message: 'Invalid release year'
            }
    
    }});
    return mongoose.model(SONG_CLASS, songSchema)
}

//Call constructor of Song class
async function createSong(title, artist, album, key, bpm, capo, difficulty, year){
    //console.log('Creating Song with data:', { title, artist, album, key, date });
    const song = new SongModel({title: title, artist:artist, album:album, key:key, bpm:bpm, capo:capo, difficulty:difficulty, year:year});
    //console.log('Song saved successfully:', Song);
    return song.save();
}



//Retrieve all Songs
const findSongs = async(filter) => {
    const query = SongModel.find(filter);
    return query.exec();
}

//Retrieve by ID
async function findSongById(_id) {
    //const Song = await Song.findById(_id);
    return SongModel.findByID(_id)
}


/**
     * Replace title, artist, album, key, and bpm
     * @param {string} title
     * @param {Number} artist
     * @param {Number} album
     * @param {String} key
     * @param {String} bpm
     */
async function replaceSong (_id, title, artist, album, key, bpm, capo, difficulty, year) {
    const updateOption = {};
    updateOption.title = title;
    updateOption.artist = artist;
    updateOption.album = album;
    updateOption.key = key;
    updateOption.bpm = bpm;
    updateOption.capo = capo;
    updateOption.bpm = bpm;
    updateOption.difficulty = difficulty;
    updateOption.year = year;
    await SongModel.updateOne({_id: _id}, updateOption);
    return SongModel.findById(_id).exec(); 
    
}


/**
 * Delete the Song with provided id value
 * @param {String} _id 
 * @returns Count of deleted documents
 */
const deleteById = async (_id) => {
    const result = await SongModel.deleteOne({_id: _id});
    /*for(let i = 0; i < Songs.length; i++){
        if(Songs[i]._id === _id){
            Songs.splice(i, 1)
            return 1;
        }
    }*/
    return result.deletedCount;
}

export { connect, createSong, findSongs, findSongById, replaceSong, deleteById };