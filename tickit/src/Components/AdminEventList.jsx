import axios from "axios";
import { useEffect, useState, useContext } from "react"
import AxiosContext from "../AxiosContext";

import AdminEventUpdate from "./AdminEventUpdate"

const AdminEventList = () => {

    const [events, setEvents] = useState();
    
    const { axiosAction, setAxiosAction }  = useContext(AxiosContext)

    useEffect(() => {
        const getEvents = async () => {
            const response = await axios.get(`http://127.0.0.1:8000/events`)
            setEvents(response.data)
        }
        console.log('got events')
        getEvents()
    },[axiosAction])

    useEffect(() => {
        setAxiosAction(false)
    },[events])


    const handleDelete = async(id) => {
        try {
            console.log(id)
            await axios.delete(
                `http://127.0.0.1:8000/events/${id}`
            );
            setAxiosAction(true)
        } catch (error) {
            console.log(error);
        }
    }

    if (!events) {
        return (
                <div className="loading">Loading...</div>
        )
    }
    
    return (
        <>
           {events.map((eve) => (
                    <div key={eve.id}>
                        <div>{eve.name}</div>
                        <AdminEventUpdate id={eve.id} venue_id={eve.venue_id} name={eve.name} date={eve.date} time={eve.time} ticket_price={eve.ticket_price} city={eve.city} state={eve.state} image_url={eve.image_url} event_description={eve.event_description}/>
                        <button onClick={() => handleDelete(eve.id)}>X</button>
                    </div>
                ))}
        </>
    )
}

export default AdminEventList