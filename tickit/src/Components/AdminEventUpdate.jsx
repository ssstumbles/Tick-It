import { useContext, useState, useEffect } from "react"
import AxiosContext from "../AxiosContext";
import axios from 'axios'

const AdminEventUpdate = ({id, venue_id , name, date, time, ticket_price, city, state, image_url}) => {

    const initialState = {
        "venue_id": venue_id,
        "name": name,
        "date": date,
        "time": time,
        "ticket_price": ticket_price,
        "city": city,
        "state": state,
        "image_url": image_url,
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
            await axios.put(`http://127.0.0.1:8000/events/${id}`, updateState)

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
                    <label>Event Name: </label>
                    <input type="text" id="name" onChange={handleChange} value={updateState.name}/>
                </div>
                <div>
                    <label>Event Date: </label>
                    <input type="date" id="date" onChange={handleChange} value={updateState.date}/>
                </div>

                <div>
                    <label>Event Time: </label>
                    <input type="time" id="time" onChange={handleChange} value={updateState.time}/>
                </div>
                
                <div>
                    <label>Ticket Price: </label>
                    <input type="number" id="ticket_price" onChange={handleChange} value={updateState.ticket_price}/>
                </div>

                <div>
                    <label>City: </label>
                    <input type="text" id="city" onChange={handleChange} value={updateState.city}/>
                </div>
                
                <div>
                    <label>State: </label>
                    <input type="text" id="state" onChange={handleChange} value={updateState.state}/>
                </div>

                <div>
                    <label>Image_URL: </label>
                    <input type="text" id="image_url" onChange={handleChange} value={updateState.image_url}/>
                </div>
                
                <div>
                <button className="update-button" onClick={handleUpdate}>Update</button>
                </div>
            </div>
            <button onClick={handleClose}>Close</button>
        </>
       
    )
}


export default AdminEventUpdate