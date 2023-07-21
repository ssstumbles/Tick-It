import { useContext, useState, useEffect } from "react"
import AxiosContext from "../AxiosContext";
import axios from 'axios'

const AdminVenueCreate = () => {

    const [venues, setVenues] = useState();

    useEffect(() => {
        const getVenues = async () => {
            const response = await axios.get(`http://127.0.0.1:8000/venues`)
            setVenues(response.data)
        }
        getVenues()
    },[])

    const initialState = {
        "name": '',
        "location": '',
        "capacity": '',
        "website_url": '',
        "venue_description": '',
    }

    const { setAxiosAction }  = useContext(AxiosContext)
    const [formState, setFormState] = useState(initialState)

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.id]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formState);

        await axios.post(`http://127.0.0.1:8000/venues/`, formState);

        setFormState(initialState);
        setAxiosAction(true)
    };

    if (!venues) { return <div className="admin-create" >Loading...</div> }

    return (
        <div className="admin-create">
            <form onSubmit={handleSubmit}>
                <div>Add A Venue</div>
                <div>Name:</div>
                <input type="text" id="name" onChange={handleChange} value={formState.name}/>
                <div>Location:</div>
                <input type="text" id="location" onChange={handleChange} value={formState.location}/>
                <div>Capacity:</div>
                <input type="number" id="capacity" onChange={handleChange} value={formState.capacity}/>
                <div>Website URL:</div>
                <input type="url" id="website_url" onChange={handleChange} value={formState.website_url}/>
                <div>Venue Description</div>
                <textarea id="venue_description" onChange={handleChange} value={formState.venue_description}/>
                <button className="venue-submit" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AdminVenueCreate