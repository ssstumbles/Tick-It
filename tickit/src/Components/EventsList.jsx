import { useEffect, useState } from "react";
import axios from "axios";
import eventsArray from "../../events.json"
import { NavLink } from "react-router-dom";

const EventsList = () => { 

    const [events, setEvents] = useState();

    useEffect(() => {
        // const getEvents = async() => {
        //     const response = await axios.get(`url/events`)
        //     setEvents(response.data.events)
        // }
        // console.log('got events')
        // getEvents()
        setEvents(eventsArray)
    }, [])

    if (!events) {
        return (
            <div className='route-body'>
                <div className="loading">Loading...</div>
            </div>
        )
    }

    return (
        <div className='route-body'>
            <h1>Events</h1>  
            <div className="event-list">
                {events.map((eve) => (
                    <NavLink to={eve.name} key={eve.id} className="event-link">
                        <div>{eve.name}</div>
                        <img src={eve.image_url}/>
                    </NavLink>
                ))}
            </div>
        </div>
         
        
    )
}

export default EventsList