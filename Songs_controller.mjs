import 'dotenv/config';
import express from 'express';
import asyncHandler from "express-async-handler"
import * as SongModel from './Songs_model.mjs';

const app = express();
app.use(express.json())
const PORT = process.env.PORT;


// CRUD Operation - create, using POST/Songs
// calls createSong in Songs_model.mjs file
app.post('/Songs', asyncHandler(async (req, res) => {
    const { title, artist, album, key, bpm, capo, difficulty, year } = req.body;
      
   //validation could go here
 
    const postSong = await SongModel.createSong(title, artist, album, key, bpm, capo, difficulty, year);
    res.status(201).json(postSong);
    
}));

// Crud Operation - get, using GET/Songs
//Retrieve all Songs. 
app.get('/Songs', asyncHandler(async (req, res) => {
    const Songs = await SongModel.findSongs();
    res.status(200).json(Songs);
}));

//Crud Operation - get, using GET/Songs/:_id
//Retrieve the Song corresponding to the ID provided in the URL.
app.get('/Songs/:Song_id', asyncHandler(async (req, res) => {
    const { Song_id} = req.params;
    const getByID = await SongModel.findSongById(Song_id);
    if (getByID) {
        res.status(200).json(getByID);
    } else {
        res.status(404).json({"Error": "Not found"}); 
    }   
}));

// CRUD Operation - updates using PUT 
// path is PUT /Songs/:id
// calls updateUser in Songs_model.mjs
app.put('/Songs/:Song_id', asyncHandler(async (req, res) => {
    const { Song_id } = req.params;
    const { title, artist, album, key, bpm, capo, difficulty, year } = req.body;
     
    const putByID = await SongModel.replaceSong(title, artist, album, key, bpm, capo, difficulty, year );    
    if (putByID) {
        res.status(200).json(putByID);
    } else{
        res.status(404).json({ "Error": "Not found"}); 
    }    
})); 

/**
 * Delete the Song whose id is provided in the query parameters
 */
app.delete('/Songs/:Song_id', asyncHandler(async (req, res) => {
    const { Song_id } = req.params;
    const deleteByID = await SongModel.deleteById(Song_id );
    
    // if no matching user ID is found, deleteByID returns null
    // if null is returned, 404 response is sent
    if(deleteByID > 0){
        return res.status(204).send()//json(deleteByID)
    }else{
        return res.status(404).json({"Error": "Not found"})
    }
}));


app.listen(PORT, asyncHandler(async () => {
    await SongModel.connect(false)
    console.log(`Server listening on port ${PORT}...`);
}));