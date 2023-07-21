import { useContext, useState, useEffect } from "react"
import AxiosContext from "../AxiosContext";
import axios from 'axios'

const AdminVenueUpdate = ({id, name, location, capacity, website_url, venue_description}) => {

    const initialState = {
        "name": name,
        "location": location,
        "capacity": capacity,
        "website_url": website_url,
        "venue_description": venue_description,
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
            await axios.put(`https://tick-it-backend-production.up.railway.app/venues/${id}`, updateState)

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
        return <button className='admin-edit-button' onClick={() => setEditMode(true)}>Edit</button>
    }

    return (
        <>
            <div className="edit-div">
                
                    <label>Venue Name: </label>
                    <input type="text" id="name" onChange={handleChange} value={updateState.name}/>
                
                    <label>Location: </label>
                    <input type="text" id="location" onChange={handleChange} value={updateState.location}/>
                
                    <label>Capacity: </label>
                    <input type="number" id="capacity" onChange={handleChange} value={updateState.capacity}/>
                
                    <label>Website URL: </label>
                    <input type="text" id="website_url" onChange={handleChange} value={updateState.website_url}/>
                
                    <label>Venue Description: </label>
                    <textarea id="venue_description" onChange={handleChange} value={updateState.venue_description}/>
                
                
                    <button className="update-button" onClick={handleUpdate}>Update</button>
                    <button onClick={handleClose}>Close</button>
            </div>
            
        </>
       
    )
}


export default AdminVenueUpdate