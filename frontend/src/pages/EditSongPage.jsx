import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'

export const EditSongPage = () => {

    const {id} = useParams();
    const [name, setName] = useState('');
    const [reps, setReps] = useState(0);
    const [weight, setWeight] = useState(0);
    const [unit, setUnit] = useState('kgs');
    const [date, setDate] = useState('');


    const navigate = useNavigate();


    useEffect(() => {
        const fetchSong = async () => {
            const response = await fetch(`/Song/${id}`);
            if (response.ok) {
                const Song = await response.json();
                setName(Song.name);
                setReps(Song.reps);
                setWeight(Song.weight);
                setUnit(Song.unit);
                setDate(Song.date);
            } else {
                console.error('Failed to fetch Song');
            }
        };

        fetchSong();
    }, [id]);

    const editSong = async () => {
        const editedSong = {name, reps, weight, unit, date}
        const response = await fetch(
            `/Song/${id}`, {
                method: 'PUT',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify(editedSong),
            }
        );
        if(response.status===200){
            alert("Successfully edited the Song");
        }else{
            alert("Failed to edit Song, status code = " + response.status)
        }
        navigate('/')
    };

    return (
        <div>
            <h2>Edit Existing Song</h2>
        <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Reps</th>
                <th>Weight</th>
                <th>Unit</th>
                <th>Date</th>

            </tr>
        </thead>
        <tbody>

        <tr>
            <td>
        <input
            type="text"
            id="Song Name"
            value={name}
            onChange={e => setName(e.target.value)} />
            </td>
            <td>
        <input
            type="number"
            value={reps}
            onChange={e => setReps(e.target.valueAsNumber)} />
            </td>
            <td>
        <input
            type="number"
            value={weight}
            onChange={e => setWeight(e.target.valueAsNumber)} />
            </td>
            <td>
         <select
            type="text"
            value={unit}
            onChange={e => setUnit(e.target.value)}
            >
            <option value = "kgs">kgs</option>
            <option value = "lbs">lbs</option>
            </select>
            </td>
            <td>
         <input
            type="text"
            value={date}
            onChange={e => setDate(e.target.value)} />
            </td>
            <td className="no-border-row">
        <button
            onClick={editSong}
        >Edit</button>
        </td>
        </tr>

        </tbody>
        
    </table>
    </div>


);
}



export default EditSongPage;
