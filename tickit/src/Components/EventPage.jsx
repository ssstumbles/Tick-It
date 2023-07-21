import { useState, useEffect } from "react"
import { NavLink, useParams } from "react-router-dom";
// import eventsArray from "../../events_arr.json"
import axios from 'axios'

const EventPage = () => {

    const [event, setEvent] = useState();
    let { id } = useParams()

    useEffect(() => {
        const getEvents = async() => {
            const response = await axios.get(`https://tick-it-backend-production.up.railway.app/events`)
            setEvent(response.data.find((eve) => eve.name === id ))
        }
        console.log('got events')
        getEvents()
    }, [id])

    if (!event) {
        return (
            <div className='route-body'>
                <div className="loading">Loading...</div>
            </div>
        )
    }

    return(
        
        <div className='route-body'>
            <NavLink to="/events" className="back-link">Back</NavLink>
            <h2>{event.name}</h2>
            <div className="image-container">
                <img src={event.image_url} height='500px' width='500px'/>
            </div>
            <br />
            <div className="date-time">Date: {event.date} | Time: {event.time}</div>
           <br />
            <div className="city-state">{event.city}, {event.state}</div>
            <br />
            <div className="event-description">{event.event_description}</div>
            <br />
            <div className="ticket-price">Ticket Price: ${event.ticket_price}</div>
        </div>
       
    )
}

export default EventPage