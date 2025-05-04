import '../App.css';

function SongRow({song}) {
    return (
        <tr >
            <td>{song.title}</td>
            <td>{song._id}</td>
            <td>{song.artist}</td>
            <td>{song.album}</td>
            <td>{song.key}</td>
            <td>{song.bpm}</td>
            <td>{song.capo}</td>
            <td>{song.difficulty}</td>
            <td>{song.year}</td>

            
        </tr>
    );
}

export default SongRow;