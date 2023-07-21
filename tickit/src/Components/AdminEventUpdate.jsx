import { useContext, useState, useEffect } from "react"
import AxiosContext from "../AxiosContext";
import axios from 'axios'

const AdminEventUpdate = ({id, venue_id , name, date, time, ticket_price, city, state, image_url, event_description}) => {

    const initialState = {
        "venue_id": venue_id,
        "name": name,
        "date": date,
        "time": time,
        "ticket_price": ticket_price,
        "city": city,
        "state": state,
        "image_url": image_url,
        "event_description": event_description,
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
            await axios.put(`https://tick-it-backend-production.up.railway.app/events/${id}`, updateState)

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
                    <label>Event Name: </label>
                    <input type="text" id="name" onChange={handleChange} value={updateState.name}/>
                
                    <label>Event Date: </label>
                    <input type="date" id="date" onChange={handleChange} value={updateState.date}/>
                
                    <label>Event Time: </label>
                    <input type="time" id="time" onChange={handleChange} value={updateState.time}/>
        
                    <label>Ticket Price: </label>
                    <input type="number" id="ticket_price" onChange={handleChange} value={updateState.ticket_price}/>

                    <label>City: </label>
                    <input type="text" id="city" onChange={handleChange} value={updateState.city}/>
                
                    <label>State: </label>
                    <input type="text" id="state" onChange={handleChange} value={updateState.state}/>
                
                    <label>Image_URL: </label>
                    <input type="text" id="image_url" onChange={handleChange} value={updateState.image_url}/>

                    <label>Event Description: </label>
                    <textarea id="event_description" onChange={handleChange} value={updateState.event_description}/>
               
                    <button className="update-button" onClick={handleUpdate}>Update</button>
                    <button onClick={handleClose}>Close</button>
        
            </div>
           
        </>
       
    )
}


export default AdminEventUpdate