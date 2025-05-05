import { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import SongTable from '../components/SongTable';


function HomePage({setSongToEdit}){
    const [songs, setSongs] = useState([]);
    //const navigate = useNavigate()

    /*Per MDN, default fetch() request is GET, adding redundant '{method: 'GET'}'
    for illustrative purposes*/ 
    const loadSongs = async () => {
        const response = await fetch('/Songs', {method: 'GET'})
        const data = await response.json();
        setSongs(data)
    }

    useEffect( () => {
            loadSongs();
        }, []);

   
    return (
        <>
            <h2>Available Songs</h2>
            <p>Browse Available Songs by Genre, Artist, Relase Year, etc</p>
            <p>Save Your Progress Using Your Student ID</p>
            <SongTable songs={songs}></SongTable>
            
        </>
    );
}


export default HomePage;