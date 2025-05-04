import SongRow from './SongRow';
import '../App.css';

function SongTable({songs}) {
    
    return (
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Song ID</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Key</th>
                    <th>BPM</th>
                    <th>Capo</th>
                    <th>Difficulty</th>
                    <th>Release Year</th>

                </tr>
            </thead>
            <tbody>
                
            {songs.map((song) => <SongRow  song={song} key={song._id}/>)}
            </tbody>
        </table>
    );
}

export default SongTable;