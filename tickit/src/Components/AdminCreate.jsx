import { useContext, useState, useEffect } from "react"
import AxiosContext from "../AxiosContext";
import axios from 'axios'

const AdminCreate = () => {

    const [venues, setVenues] = useState();

    useEffect(() => {
        const getVenues = async () => {
            const response = await axios.get(`http://127.0.0.1:8000/venues`)
            setVenues(response.data)
        }
        getVenues()
    },[])

    const initialState = {
        "venue_id": '',
        "name": '',
        "date": '',
        "time": '',
        "ticket_price": 0,
        "city": '',
        "state": '',
        "image_url": '',
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

    if (!venues) { return <div>Loading...</div> }

    return (
        <div className="create-event">
            <form onSubmit={handleSubmit}>
                <div>Add An Event</div>
                <div>Venue:</div>
                <select onChange={handleChange} id="venue_id" value={formState.venue_id}>
                    <option value=""> - - Select Venue - - </option>
                    {venues.map((ven) => (
                        <option key={ven.id} value={ven.id}>{ven.name}</option>
                    ))}
                </select>
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