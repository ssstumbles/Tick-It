import { useContext, useState } from "react"
import AxiosContext from "../AxiosContext";
import axios from 'axios'

const AdminCreate = () => {

    const initialState = {
        "venue_id": undefined,
        "name": undefined,
        "date": undefined,
        "time": undefined,
        "ticket_price": undefined,
        "city": undefined,
        "state": undefined,
        "image_url": undefined,
    }

    const { setAxiosAction }  = useContext(AxiosContext)
    const [formState, setFormState] = useState(initialState)

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.id]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formState);

        await axios.post(`http://127.0.0.1:8000/events/`, formState);

        setFormState(initialState);
        setAxiosAction(true)
    };


    // const handleCreate = async () => {
    //         await axios.post(
    //             `http://127.0.0.1:8000/events/`,
    //             {
    //                 "venue_id": 2,
    //                 "name": "Les Miserables",
    //                 "date": "2023-08-01",
    //                 "time": "19:30:00",
    //                 "ticket_price": 140,
    //                 "city": "Los Angeles",
    //                 "state": "CA",
    //                 "image_url": null
    //             }
    //         );
            
    // }
    // will include a form to handle the submission instead of a static new event

    return (
        <div className="create-event">
            <form onSubmit={handleSubmit}>
                <div>Add An Event</div>
                <div>Venue:</div>
                <input type="number" id="venue_id" onChange={handleChange} value={formState.venue_id}/>
                <div>Name:</div>
                <input type="text" id="name" onChange={handleChange} value={formState.name}/>
                <div>Date:</div>
                <input type="date" id="date" onChange={handleChange} value={formState.date}/>
                <div>Time:</div>
                <input type="time" id="time" onChange={handleChange} value={formState.time}/>
                <div>Ticket Price:</div>
                <input type="number" id="ticket_price" onChange={handleChange} value={formState.ticket_price}/>
                <div>City:</div>
                <input type="text" id="city" onChange={handleChange} value={formState.city}/>
                <div>State:</div>
                <input type="text" id="state" onChange={handleChange} value={formState.state}/>
                <div>Image URL:</div>
                <input type="url" id="image_url" onChange={handleChange} value={formState.image_url}/>

                <button className="event-submit" type="submit">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default AdminCreate