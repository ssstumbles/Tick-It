import { useContext, useState, useEffect } from "react"
import AxiosContext from "../AxiosContext";
import axios from 'axios'

const AdminVenueUpdate = ({id, name, location, capacity, website_url}) => {

    const initialState = {
        "name": name,
        "location": location,
        "capacity": capacity,
        "website_url": website_url,
    }

    const [updateState, setUpdateState] = useState(initialState);
    const [editMode, setEditMode] = useState(false);
    const { setAxiosAction } = useContext(AxiosContext)

    const handleChange = (e) => {
        setUpdateState({...updateState, [e.target.id]: e.target.value})
        console.log(e.target.value)
        console.log(e.target.id)
    }

    const handleUpdate = async () => {
        console.log(id)
        console.log(updateState)
        try {
            await axios.put(`http://127.0.0.1:8000/venues/${id}`, updateState)

            console.log(updateState.field)

            setEditMode(false)
            setAxiosAction(true)
        } catch (error) {
            console.log(error);
        }
    }
    const handleClose = () => {
        setEditMode(false)
        setUpdateState(initialState)
    }


    if (!editMode) {
        return <button onClick={() => setEditMode(true)}>Edit</button>
    }

    return (
        <>
            <div className="edit-div">
                <div>
                    <label>Venue Name: </label>
                    <input type="text" id="name" onChange={handleChange} value={updateState.name}/>
                </div>
                <div>
                    <label>Location: </label>
                    <input type="text" id="location" onChange={handleChange} value={updateState.location}/>
                </div>
                <div>
                    <label>Capacity: </label>
                    <input type="number" id="capacity" onChange={handleChange} value={updateState.capacity}/>
                </div>
                <div>
                    <label>Website URL: </label>
                    <input type="text" id="website_url" onChange={handleChange} value={updateState.website_url}/>
                </div>
                
                <div>
                <button className="update-button" onClick={handleUpdate}>Update</button>
                </div>
            </div>
            <button onClick={handleClose}>Close</button>
        </>
       
    )
}


export default AdminVenueUpdate